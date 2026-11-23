const LABELS = { on: "Server connected", off: "Server offline", loading: "Connecting…" };

export default function Header({ status }) {
  return (
    <header className="rise">
      <div className="logo">
        <b>🧾</b>
        <span>InvoiceFlow</span>
      </div>
      <div className="glass status">
        <span className={`dot ${status === "loading" ? "" : status}`} />
        <span>{LABELS[status]}</span>
      </div>
    </header>
  );
}
