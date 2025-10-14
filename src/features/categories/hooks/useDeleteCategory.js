import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../../services/categories";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending } = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["categories"] }),
    onError: (e) => {
      console.error(e);
      toast.error(e.message);
    },
  });
  return { deleteCategory, isPending };
}
