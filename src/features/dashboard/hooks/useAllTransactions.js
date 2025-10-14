import useUser from "../../auth/hooks/useUser";
import { fetchAllTransactions } from "../../../services/transactions";
import { useQuery } from "@tanstack/react-query";

export default function useTransactions() {
  const { user } = useUser();
  const { data, isPending, error } = useQuery({
    queryKey: ["allTransactions"],
    queryFn: () => fetchAllTransactions({ user_id: user.id }),
    enabled: !!user?.id,
  });

  return {
    transactions: data,
    isPending,
    error,
  };
}
