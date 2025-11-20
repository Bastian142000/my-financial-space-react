import SavingsIcon from "@mui/icons-material/Savings";
import CardLayout from "./CardLayout";

export default function Income({ income }) {
  return (
    <CardLayout>
      <div className="rounded-full border border-green-300 bg-green-50 p-5">
        <SavingsIcon fontSize="large" className="text-green-700" />
      </div>
      <div className="text-xl font-semibold">
        <h2>MONTHLY INCOME</h2>
        <p className="text-3xl font-bold text-green-600">
          ${income.toLocaleString()}
        </p>
      </div>
    </CardLayout>
  );
}
