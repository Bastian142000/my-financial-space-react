import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import groupByMonth from "../../../utils/groupByMonth";

export default function FinancesLineChart({ transactions }) {
  const data = groupByMonth(transactions);
  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Monthly Income vs Expenses</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No transactions for this month.</p>
      ) : (
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#16A34A"
              strokeWidth={3}
              name="Income"
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#DC2626"
              strokeWidth={3}
              name="Expense"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
