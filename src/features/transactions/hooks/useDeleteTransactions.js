import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransactions as deleteTransactionsApi } from "../../../services/transactions";

export default function useDeleteTransactions() {
  const queryClient = useQueryClient();
  const { mutate: deleteTransactions } = useMutation({
    mutationFn: deleteTransactionsApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["transactions"] }),
    onError: (error) => {
      console.error(error.message);
      throw new Error(error.message);
    },
  });
  return { deleteTransactions };
}
