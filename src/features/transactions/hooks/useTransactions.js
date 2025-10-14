import useUser from "../../auth/hooks/useUser";
import { fetchTransactions } from "../../../services/transactions";
import { useQuery } from "@tanstack/react-query";

export default function useTransactions(currentPage) {
  const { user } = useUser();
  const { data, isPending, error } = useQuery({
    queryKey: ["transactions", currentPage],
    queryFn: () => fetchTransactions({ user_id: user.id, page: currentPage }),
    enabled: !!user?.id,
  });

  return {
    transactions: data?.data,
    count: data?.count,
    isPending,
    error,
  };
}
