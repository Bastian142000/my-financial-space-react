import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Expense({ expense }) {
  return (
    <div className="mt-5 flex h-52 w-lg items-center gap-5 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm">
      <div className="rounded-full border border-red-300 bg-red-50 p-5">
        <AttachMoneyIcon fontSize="large" className="text-red-700" />
      </div>
      <div className="text-xl font-semibold">
        <h2>MONTHLY EXPENSE</h2>
        <p className="text-3xl font-bold text-red-600">${expense}</p>
      </div>
    </div>
  );
}
