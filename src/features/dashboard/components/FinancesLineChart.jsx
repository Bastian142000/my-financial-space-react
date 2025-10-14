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
import { useState } from "react";

export default function FinancesLineChart({ transactions }) {
  const [prevYear, setPrevYear] = useState(false);
  const data = groupByMonth(transactions, prevYear);
  return (
    <>
      <div className="flex justify-end gap-5">
        <button
          className={`cursor-pointer rounded-xl border border-gray-300 p-3 shadow-xl transition-transform duration-300 ease-in-out ${prevYear ? "scale-90 bg-blue-100" : ""}`}
          onClick={() => setPrevYear(true)}
        >
          Previous year
        </button>
        <button
          className={`cursor-pointer rounded-xl border border-gray-300 p-3 shadow-xl transition-transform duration-300 ease-in-out ${prevYear ? "" : "scale-90 bg-blue-100"}`}
          onClick={() => setPrevYear(false)}
        >
          Current year
        </button>
      </div>
      <h2 className="mb-4 text-xl font-bold">Annual Income vs Expenses</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No transactions for this year.</p>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
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
