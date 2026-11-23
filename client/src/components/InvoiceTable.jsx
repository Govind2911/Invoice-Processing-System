import { money } from "../utils";
import { API_URL } from "../api";

export default function InvoiceTable({ invoices, status, loading, query, setQuery, removing, onDelete }) {
  const q = query.toLowerCase();
  const list = invoices.filter((i) => `${i.vendor} ${i.product}`.toLowerCase().includes(q));

  return (
    <div className="glass panel rise" style={{ "--i": 6 }}>
      <div className="tools">
        <h3 style={{ margin: 0 }}>All Invoices</h3>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search vendor or product"
          aria-label="Search invoices"
        />
      </div>

      <div className="tablebox">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Vendor</th><th>Product</th><th>Amount</th><th>Date</th><th>Action</th><th />
            </tr>
          </thead>
          <tbody>
            {list.map((i, n) => (
              <tr key={i.id} style={{ "--r": n }} className={removing.includes(i.id) ? "out" : ""}>
                <td>{i.id}</td>
                <td><b>{i.vendor}</b></td>
                <td>{i.product}</td>
                <td className="amt">{money(i.amount)}</td>
                <td>{i.date}</td>
                <td><span className={`badge b-${i.action}`}>{i.action}</span></td>
                <td><button className="del" onClick={() => onDelete(i.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loading && (
        <div>
          <div className="skel" /><div className="skel" /><div className="skel" />
        </div>
      )}
      {!loading && status === "off" && (
        <div className="empty"><div>🔌</div><p>Can't reach the server at {API_URL}. Start the Spring Boot app and refresh.</p></div>
      )}
      {!loading && status === "on" && list.length === 0 && (
        <div className="empty"><div>📭</div><p>{invoices.length ? "No invoices match your search" : "No invoices yet. Add your first one."}</p></div>
      )}
    </div>
  );
}
