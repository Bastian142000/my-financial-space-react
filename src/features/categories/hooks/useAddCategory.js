import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory as addCategoryApi } from "../../../services/categories";

export default function useAddCategory() {
  const queryClient = useQueryClient();
  const { mutate: addCategory, isPending } = useMutation({
    mutationFn: addCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category added successfully");
    },
    onError: (e) => {
      console.error(e);
      toast.error(e.message);
    },
  });
  return { addCategory, isPending };
}
