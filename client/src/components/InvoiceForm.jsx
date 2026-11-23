import { useState } from "react";
import { ACTIONS } from "../utils";

const today = () => new Date().toISOString().slice(0, 10);
const blank = () => ({ vendor: "", product: "", amount: "", date: today(), action: "Pending" });

export default function InvoiceForm({ onSubmit, notify }) {
  const [f, setF] = useState(blank());
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const amount = parseFloat(f.amount);
    if (!f.vendor.trim() || !f.product.trim() || isNaN(amount) || !f.date) {
      return notify("Please fill all fields", true);
    }
    setBusy(true);
    const ok = await onSubmit({ ...f, vendor: f.vendor.trim(), product: f.product.trim(), amount });
    setBusy(false);
    if (ok) setF(blank());
  };

  return (
    <form className="glass panel rise" style={{ "--i": 5 }} onSubmit={submit}>
      <h3>➕ New Invoice</h3>
      <label htmlFor="vendor">Vendor</label>
      <input id="vendor" value={f.vendor} onChange={set("vendor")} placeholder="e.g. Acme Supplies" />
      <label htmlFor="product">Product</label>
      <input id="product" value={f.product} onChange={set("product")} placeholder="e.g. Office chairs" />
      <label htmlFor="amount">Amount (₹)</label>
      <input id="amount" type="number" min="0" step="0.01" value={f.amount} onChange={set("amount")} placeholder="0.00" />
      <label htmlFor="date">Date</label>
      <input id="date" type="date" value={f.date} onChange={set("date")} />
      <label htmlFor="action">Action</label>
      <select id="action" value={f.action} onChange={set("action")}>
        {ACTIONS.map((a) => <option key={a}>{a}</option>)}
      </select>
      <button className="btn" type="submit" disabled={busy}>
        {busy ? "Adding…" : "Add Invoice"}
      </button>
    </form>
  );
}
