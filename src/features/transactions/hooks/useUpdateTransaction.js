import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTransaction as updateTransactionApi } from "../../../services/transactions";

export default function useUpdateTransaction() {
  const queryClient = useQueryClient();

  const { mutate: updateTransaction, isPending } = useMutation({
    mutationFn: updateTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (e) => {
      console.error(e);
      toast.error(e.message);
    },
  });
  return { updateTransaction, isPending };
}
