const BASE = import.meta.env.VITE_API_URL || "http://localhost:9090";

async function request(path, options) {
  const res = await fetch(BASE + path, options);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res;
}

export const API_URL = BASE;

export const getInvoices = async () => (await request("/invoice")).json();

export const addInvoice = (invoice) =>
  request("/invoice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invoice),
  });

export const deleteInvoice = (id) => request(`/invoice/${id}`, { method: "DELETE" });
