import dayjs from "dayjs";

export default function groupByMonth(transactions, prevYear) {
  const result = {};
  const now = dayjs();
  const data =
    transactions?.filter((t) => {
      const date = dayjs(t.date);
      if (prevYear) return date.year() === now.year() - 1;
      return date.year() === now.year();
    }) ?? [];

  data?.forEach((t) => {
    const month = dayjs(t.date).format("MMM YYYY");

    if (!result[month]) {
      result[month] = { month, income: 0, expense: 0 };
    }

    if (t.type === "INCOME") {
      result[month].income += t.amount;
    } else if (t.type === "EXPENSE") {
      result[month].expense += t.amount;
    }
  });

  return Object.values(result).sort((a, b) =>
    dayjs(a.month).diff(dayjs(b.month)),
  );
}
