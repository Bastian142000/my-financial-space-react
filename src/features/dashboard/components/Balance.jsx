import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CardLayout from "./CardLayout";

export default function Balance({ balance }) {
  return (
    <CardLayout>
      <div className="rounded-full border border-blue-300 bg-blue-50 p-5">
        <AccountBalanceIcon fontSize="large" className="text-blue-600" />
      </div>
      <div className="text-xl font-semibold">
        <h2>MONTHLY BALANCE</h2>
        <p
          className={`flex text-3xl font-semibold ${balance > 0 ? "text-green-700" : balance < 0 ? "text-orange-400" : "text-black"} `}
        >
          ${balance.toLocaleString()}
        </p>
      </div>
    </CardLayout>
  );
}
