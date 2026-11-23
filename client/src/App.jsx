import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import StatCards from "./components/StatCards";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceTable from "./components/InvoiceTable";
import Toasts from "./components/Toasts";
import { getInvoices, addInvoice, deleteInvoice } from "./api";

export default function App() {
  const [invoices, setInvoices] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | on | off
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [removing, setRemoving] = useState([]);
  const [toasts, setToasts] = useState([]);

  const notify = useCallback((msg, err = false) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, err }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3300);
  }, []);

  const load = useCallback(async () => {
    try {
      setInvoices(await getInvoices());
      setStatus("on");
    } catch {
      setStatus("off");
      notify("Server unreachable", true);
    } finally {
      setLoading(false);
    }
  }, [notify]);

  useEffect(() => { load(); }, [load]);

  const handleAdd = async (invoice) => {
    try {
      await addInvoice(invoice);
      notify("Invoice added ✓");
      await load();
      return true;
    } catch {
      notify("Could not add invoice", true);
      return false;
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInvoice(id);
      setRemoving((r) => [...r, id]);
      setTimeout(() => {
        setInvoices((list) => list.filter((i) => i.id !== id));
        setRemoving((r) => r.filter((x) => x !== id));
      }, 380);
      notify("Invoice deleted");
    } catch {
      notify("Delete failed", true);
    }
  };

  return (
    <>
      <div className="aurora"><i /><i /><i /></div>
      <div className="wrap">
        <Header status={status} />
        <StatCards invoices={invoices} />
        <div className="grid">
          <InvoiceForm onSubmit={handleAdd} notify={notify} />
          <InvoiceTable
            invoices={invoices}
            status={status}
            loading={loading}
            query={query}
            setQuery={setQuery}
            removing={removing}
            onDelete={handleDelete}
          />
        </div>
      </div>
      <Toasts items={toasts} />
    </>
  );
}
