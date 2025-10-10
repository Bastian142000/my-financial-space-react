import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../../services/transactions";
import useUser from "../../auth/hooks/useUser";

export default function useStatistics() {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => fetchTransactions({ user_id: user.id }),
    select: (transactions) => {
      const income = transactions
        .filter((t) => t.type === "INCOME")
        .reduce((acc, curr) => acc + curr.amount, 0);

      const expense = transactions
        .filter((t) => t.type === "EXPENSE")
        .reduce((acc, curr) => acc + curr.amount, 0);

      return { income, expense };
    },
  });
  return { data, isLoading, error };
}
