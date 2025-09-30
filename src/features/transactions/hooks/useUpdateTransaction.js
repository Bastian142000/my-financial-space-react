import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTransaction as updateTransactionApi } from "../../../services/transactions";

export default function useUpdateTransaction() {
  const queryClient = useQueryClient();

  const { mutate: updateTransaction, isPending } = useMutation({
    mutationFn: updateTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      console.error(error);
      throw new Error(error.message);
    },
  });
  return { updateTransaction, isPending };
}
