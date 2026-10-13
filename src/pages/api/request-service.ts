import type { APIRoute } from "astro";
import { createHcpLead, type LeadInput } from "../../lib/hcp";
import { sendLeadEmail } from "../../lib/notify-email";

// The ONLY on-demand/server route in the site. Every other page stays static.
export const prerender = false;

// Read secrets at RUNTIME. On Netlify the SSR function gets these from the
// site's configured env vars via process.env; import.meta.env is the local-dev
// fallback (.env). Reading process.env first avoids Vite inlining build-time
// values into the deployed bundle.
const env = (key: string): string | undefined =>
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.[key] ??
  (import.meta.env as Record<string, string | undefined>)[key];

// The lead is captured if EITHER channel succeeds. Only a total failure (HCP
// down AND the email fallback failed) is reported as an error to the client.
export const leadOk = (hcpOk: boolean, emailed: boolean): boolean =>
  hcpOk || emailed;

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const input: LeadInput = {
    name: String(form.get("name") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    email: String(form.get("email") ?? "").trim() || undefined,
    address: String(form.get("address") ?? "").trim() || undefined,
    problem: String(form.get("problem") ?? "").trim(),
    // Attribution string stamped by the form from the hp_attrib cookie.
    // Capped: it feeds HCP notes and the email body, never anything parsed.
    source:
      String(form.get("lead_source") ?? "")
        .trim()
        .slice(0, 300) || undefined,
  };

  if (!input.name || !input.phone || !input.problem) {
    return new Response(
      JSON.stringify({ ok: false, error: "Missing required fields" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const hcp = await createHcpLead(input, {
    fetch,
    apiKey: env("HCP_API_KEY"),
  });

  // Always email Isaac, regardless of the HCP result, so a lead is never lost
  // even when the HCP call fails. Non-blocking: a SendGrid outage must never
  // break the response (sendLeadEmail already resolves false on failure; the
  // .catch is belt-and-suspenders).
  const emailed = await sendLeadEmail(input, {
    fetch,
    apiKey: env("SENDGRID_API_KEY"),
    to: env("LEAD_NOTIFY_EMAIL"),
  }).catch(() => false);

  // Success when EITHER channel captured the lead. Returning 502 while the email
  // fallback succeeded would wrongly tell the customer their request was lost.
  const ok = leadOk(hcp.ok, emailed);
  return new Response(JSON.stringify({ ok }), {
    status: ok ? 200 : 502,
    headers: { "Content-Type": "application/json" },
  });
};
