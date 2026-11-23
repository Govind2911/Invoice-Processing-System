# InvoiceFlow Frontend (React + Vite)

Frontend for the Spring Boot invoice processing backend.

## Run
1. Start the backend (Spring Boot, port 9090).
2. In this folder:
   npm install
   npm run dev
3. Open http://localhost:5173

The backend URL is set in `.env` (`VITE_API_URL`).

## Structure
- src/api.js            – GET/POST/DELETE /invoice calls
- src/App.jsx           – state and data loading
- src/components/       – Header, StatCards, InvoiceForm, InvoiceTable, Toasts
- src/hooks/useCountUp  – animated stat numbers
- src/styles.css        – emerald/gold theme and animations (no hover effects)
