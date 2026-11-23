export const money = (n) =>
  "₹" + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 2 });

export const ACTIONS = ["Pending", "Approved", "Paid", "Rejected"];
