import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Balance({ balance }) {
  return (
    <div className="mt-5 flex h-52 w-lg items-center gap-5 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm">
      <div className="rounded-full border border-blue-300 bg-blue-50 p-5">
        <AccountBalanceIcon fontSize="large" className="text-blue-600" />
      </div>
      <div className="text-xl font-semibold">
        <h2>MONTHLY BALANCE</h2>
        <p
          className={`flex text-3xl font-semibold ${balance > 0 ? "text-green-700" : balance < 0 ? "text-orange-400" : "text-black"} `}
        >
          ${balance}
        </p>
      </div>
    </div>
  );
}
