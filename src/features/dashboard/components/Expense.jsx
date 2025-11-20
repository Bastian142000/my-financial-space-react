import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CardLayout from "./CardLayout";

export default function Expense({ expense }) {
  return (
    <CardLayout>
      <div className="rounded-full border border-red-300 bg-red-50 p-5">
        <AttachMoneyIcon fontSize="large" className="text-red-700" />
      </div>
      <div className="text-xl font-semibold">
        <h2>MONTHLY EXPENSE</h2>
        <p className="text-3xl font-bold text-red-600">
          ${expense.toLocaleString()}
        </p>
      </div>
    </CardLayout>
  );
}
