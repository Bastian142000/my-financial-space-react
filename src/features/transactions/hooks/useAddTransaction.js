import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTransaction as addTransactionApi } from "../../../services/transactions";

export default function useAddTransaction() {
  const queryClient = useQueryClient();

  const { mutate: addTransaction, isPending } = useMutation({
    mutationFn: addTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      console.error(error);
      throw new Error(error.message);
    },
  });
  return { addTransaction, isPending };
}
