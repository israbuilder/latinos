export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  problem: string;
  source?: string;
};

type Deps = { fetch: typeof fetch; apiKey: string };

/**
 * Creates a customer in Housecall Pro from a website "Request Service" lead.
 *
 * Endpoint + field names verified against housecall.v1.yaml (CustomerCreate schema):
 *   POST https://api.housecallpro.com/customers
 *   first_name, last_name, email, mobile_number, notes, lead_source, addresses[]
 *
 * The dedicated POST /leads endpoint is NOT used: per the spec it "creates a lead
 * with the ID for an already existing customer" (LeadCreate requires customer_id),
 * so it cannot accept a fresh web lead. POST /customers with lead_source is the
 * correct entry point for an inbound web lead.
 */
export async function createHcpLead(input: LeadInput, deps: Deps) {
  const [first_name, ...rest] = input.name.trim().split(/\s+/);
  const body: Record<string, unknown> = {
    first_name,
    last_name: rest.join(" ") || "(web lead)",
    mobile_number: input.phone,
    email: input.email,
    // Full attribution detail goes in notes; lead_source stays coarse so HCP's
    // lead-source reporting isn't polluted with one-off strings.
    notes: input.source
      ? `${input.problem}\n\nSource: ${input.source}`
      : input.problem,
    lead_source: input.source?.startsWith("openai")
      ? "Website — ChatGPT Ad"
      : "Website",
  };
  // HCP CustomerCreate takes a structured addresses[] array, not a flat string.
  if (input.address) {
    body.addresses = [{ street: input.address }];
  }

  // Any thrown error (network/DNS/timeout, or a 2xx with a non-JSON body) must
  // resolve to { ok: false } so the endpoint honors its 502 contract and Task 5's
  // email fallback still fires — the lead is never lost. We log so failures stay
  // visible rather than being swallowed silently.
  try {
    const r = await deps.fetch("https://api.housecallpro.com/customers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${deps.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!r.ok) return { ok: false as const };
    const data = await r.json();
    return { ok: true as const, id: data.id as string };
  } catch (err) {
    console.error("createHcpLead failed:", err);
    return { ok: false as const };
  }
}
