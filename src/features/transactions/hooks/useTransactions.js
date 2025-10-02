import useUser from "../../auth/hooks/useUser";
import { fetchTransactions } from "../../../services/transactions";
import { useQuery } from "@tanstack/react-query";

export default function useTransactions() {
  const { user } = useUser();
  const {
    data: transactions,
    isPending,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => fetchTransactions({ user_id: user.id }),
  });

  return { transactions, isPending, error };
}
