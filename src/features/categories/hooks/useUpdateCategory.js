import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory as updateCategoryApi } from "../../../services/categories";

export default function useUpdateCategory() {
  const queryClient = useQueryClient();
  const { mutate: updateCategory, isPending } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category updated successfully");
    },
    onError: (e) => {
      console.error(e);
      toast.error(e.message);
    },
  });
  return { updateCategory, isPending };
}
