import SavingsIcon from "@mui/icons-material/Savings";

export default function Income({ income }) {
  return (
    <div className="mt-5 flex h-52 w-full items-center gap-5 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm lg:w-lg">
      <div className="rounded-full border border-green-300 bg-green-50 p-5">
        <SavingsIcon fontSize="large" className="text-green-700" />
      </div>
      <div className="text-xl font-semibold">
        <h2>MONTHLY INCOME</h2>
        <p className="text-3xl font-bold text-green-600">
          ${income.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
