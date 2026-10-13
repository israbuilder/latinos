import { describe, it, expect, vi } from "vitest";
import { createHcpLead } from "./hcp";

describe("createHcpLead", () => {
  it("posts a customer to HCP and returns the id", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "cus_123" }),
    });
    const res = await createHcpLead(
      { name: "Jane Doe", phone: "7135551234", problem: "Leaky faucet" },
      { fetch: fetchMock, apiKey: "key_test" }
    );
    expect(res).toEqual({ ok: true, id: "cus_123" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.housecallpro.com/customers",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ Authorization: "Bearer key_test" }),
      })
    );
  });

  it("returns ok:false when HCP rejects", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, status: 422, json: async () => ({}) });
    const res = await createHcpLead(
      { name: "X", phone: "1", problem: "y" },
      { fetch: fetchMock, apiKey: "k" }
    );
    expect(res.ok).toBe(false);
  });

  it("maps name into first/last and sends spec-correct customer fields", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "cus_456" }),
    });
    await createHcpLead(
      {
        name: "Jane Q Doe",
        phone: "7135551234",
        email: "jane@example.com",
        address: "100 Main St, Houston, TX 77002",
        problem: "Water heater leaking",
      },
      { fetch: fetchMock, apiKey: "k" }
    );
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body).toMatchObject({
      first_name: "Jane",
      last_name: "Q Doe",
      mobile_number: "7135551234",
      email: "jane@example.com",
      notes: "Water heater leaking",
      lead_source: "Website",
    });
    // address is a structured array per the HCP CustomerCreate schema, not a flat string
    expect(body.addresses).toEqual([{ street: "100 Main St, Houston, TX 77002" }]);
  });

  it("returns ok:false when fetch rejects (network error)", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("network down"));
    const res = await createHcpLead(
      { name: "X", phone: "1", problem: "y" },
      { fetch: fetchMock, apiKey: "k" }
    );
    expect(res.ok).toBe(false);
  });

  it("returns ok:false when a 2xx response has a non-JSON body", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => {
        throw new Error("Unexpected end of JSON input");
      },
    });
    const res = await createHcpLead(
      { name: "X", phone: "1", problem: "y" },
      { fetch: fetchMock, apiKey: "k" }
    );
    expect(res.ok).toBe(false);
  });

  it("falls back to a placeholder last name when only one name token is given", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "cus_789" }),
    });
    await createHcpLead(
      { name: "Cher", phone: "1", problem: "clog" },
      { fetch: fetchMock, apiKey: "k" }
    );
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.first_name).toBe("Cher");
    expect(body.last_name).toBe("(web lead)");
    // no address provided -> omit addresses entirely
    expect(body.addresses).toBeUndefined();
  });
});
