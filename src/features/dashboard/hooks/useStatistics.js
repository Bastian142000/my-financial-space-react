import useUser from "../../auth/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTransactions } from "../../../services/transactions";
import dayjs from "dayjs";

export default function useStatistics() {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllTransactions"],
    queryFn: () => fetchAllTransactions({ user_id: user.id }),
    select: (transactions) => {
      const now = dayjs();
      const result = transactions?.filter(
        (t) =>
          dayjs(t.date).month() === now.month() &&
          dayjs(t.date).year() === now.year(),
      );

      const income = result
        .filter((t) => t.type === "INCOME")
        .reduce((acc, curr) => acc + curr.amount, 0);

      const expense = result
        .filter((t) => t.type === "EXPENSE")
        .reduce((acc, curr) => acc + curr.amount, 0);

      return { income, expense };
    },
  });
  return { data, isLoading, error };
}
