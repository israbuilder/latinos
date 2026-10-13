import type { LeadInput } from "./hcp";

type Deps = { fetch: typeof fetch; apiKey: string; to: string };

/**
 * Emails the lead details to LEAD_NOTIFY_EMAIL via SendGrid's HTTP API.
 *
 * This fires on EVERY website "Request Service" submission, regardless of the
 * Housecall Pro outcome, so a lead is never lost even if the HCP API call fails.
 *
 * Like createHcpLead, this owns its own failure: a network/DNS/timeout rejection
 * resolves to `false` rather than throwing, so callers never have to wrap it.
 * We never log deps.apiKey.
 */
export async function sendLeadEmail(
  input: LeadInput,
  deps: Deps
): Promise<boolean> {
  try {
    const r = await deps.fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${deps.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: deps.to }] }],
        from: { email: "website@houstonitsecurity.net" },
        subject: `New website lead: ${input.name}`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email ?? "-"}\nAddress: ${input.address ?? "-"}\nProblem: ${input.problem}\nSource: ${input.source ?? "-"}`,
          },
        ],
      }),
    });
    return r.ok;
  } catch (err) {
    console.error("sendLeadEmail failed:", err);
    return false;
  }
}
