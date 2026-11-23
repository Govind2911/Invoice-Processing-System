import useCountUp from "../hooks/useCountUp";
import { money } from "../utils";

function Stat({ label, value, format, i }) {
  const v = useCountUp(value);
  return (
    <div className="glass stat rise" style={{ "--i": i }}>
      <small>{label}</small>
      <h2>{format(v)}</h2>
    </div>
  );
}

export default function StatCards({ invoices }) {
  const total = invoices.reduce((a, x) => a + Number(x.amount || 0), 0);
  const pending = invoices.filter((x) => x.action === "Pending").length;
  const vendors = new Set(invoices.map((x) => (x.vendor || "").toLowerCase())).size;
  const int = (v) => Math.round(v);

  return (
    <section className="stats">
      <Stat i={1} label="Total Invoices" value={invoices.length} format={int} />
      <Stat i={2} label="Total Amount" value={total} format={money} />
      <Stat i={3} label="Pending" value={pending} format={int} />
      <Stat i={4} label="Vendors" value={vendors} format={int} />
    </section>
  );
}
