import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTransaction as addTransactionApi } from "../../../services/transactions";

export default function useAddTransaction() {
  const queryClient = useQueryClient();

  const { mutate: addTransaction, isPending } = useMutation({
    mutationFn: addTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (e) => {
      console.error(e);
      toast.error(e.message);
    },
  });
  return { addTransaction, isPending };
}
