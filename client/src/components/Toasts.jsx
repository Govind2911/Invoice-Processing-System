export default function Toasts({ items }) {
  return (
    <div id="toasts" aria-live="polite">
      {items.map((t) => (
        <div key={t.id} className={`toast${t.err ? " err" : ""}`}>{t.msg}</div>
      ))}
    </div>
  );
}
