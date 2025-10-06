import dayjs from "dayjs";

export default function groupByMonth(transactions) {
  const result = {};

  transactions?.forEach((t) => {
    const month = dayjs(t.date).format("YYYY-MM");

    if (!result[month]) {
      result[month] = { month, income: 0, expense: 0 };
    }

    if (t.type === "INCOME") {
      result[month].income += t.amount;
    } else if (t.type === "EXPENSE") {
      result[month].expense += t.amount;
    }
  });

  return Object.values(result);
}
