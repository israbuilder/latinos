import { describe, it, expect, vi } from "vitest";
import { sendLeadEmail } from "./notify-email";

describe("sendLeadEmail", () => {
  it("sends an email with the lead details", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    const ok = await sendLeadEmail(
      { name: "Jane", phone: "713", problem: "Leak" },
      { fetch: fetchMock, apiKey: "sg", to: "houstonitbrenda@gmail.com" }
    );
    expect(ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.sendgrid.com/v3/mail/send",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("includes the lead fields and from/to addresses in the request body", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    await sendLeadEmail(
      {
        name: "Jane Doe",
        phone: "7135551234",
        email: "jane@example.com",
        address: "1 Main St",
        problem: "Leaky faucet",
      },
      { fetch: fetchMock, apiKey: "sg", to: "houstonitbrenda@gmail.com" }
    );
    const [, opts] = fetchMock.mock.calls[0];
    const body = JSON.parse(opts.body);
    expect(body.from).toEqual({ email: "website@houstonitsecurity.net" });
    expect(body.personalizations[0].to).toEqual([
      { email: "houstonitbrenda@gmail.com" },
    ]);
    expect(body.subject).toContain("Jane Doe");
    const text = body.content[0].value;
    expect(text).toContain("7135551234");
    expect(text).toContain("jane@example.com");
    expect(text).toContain("1 Main St");
    expect(text).toContain("Leaky faucet");
  });

  it("returns false when SendGrid responds non-ok", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false });
    const ok = await sendLeadEmail(
      { name: "X", phone: "1", problem: "y" },
      { fetch: fetchMock, apiKey: "sg", to: "houstonitbrenda@gmail.com" }
    );
    expect(ok).toBe(false);
  });

  it("resolves false instead of throwing when fetch rejects", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("network down"));
    const ok = await sendLeadEmail(
      { name: "X", phone: "1", problem: "y" },
      { fetch: fetchMock, apiKey: "sg", to: "houstonitbrenda@gmail.com" }
    );
    expect(ok).toBe(false);
  });
});
