import {
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import dayjs from "dayjs";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f7f",
  "#8dd1e1",
  "#a4de6c",
];

export default function ExpensesByCategory({ transactions = [] }) {
  const now = dayjs();

  const expenses =
    transactions?.filter((t) => {
      if (t.type !== "EXPENSE") return false;
      const date = dayjs(t.date);
      return date.month() === now.month() && date.year() === now.year();
    }) ?? [];

  const grouped = expenses.reduce((acc, curr) => {
    const category = curr.Category.category_name || "Uncategorized";
    if (!acc[category]) acc[category] = { name: category, value: 0 };
    acc[category].value += curr.amount;
    return acc;
  }, {});

  const data = Object.values(grouped);

  return (
    <div className="h-[462px] rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm">
      <h2 className="mb-4 text-xl font-bold">Expenses by category</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No expenses for this month.</p>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Legend />
            <Tooltip
              formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
            />
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
