import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory as addCategoryApi } from "../../../services/categories";

export default function useAddCategory() {
  const queryClient = useQueryClient();
  const { mutate: addCategory, isPending } = useMutation({
    mutationFn: addCategoryApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["categories"] }),
    onError: (e) => {
      console.error(e);
      throw new Error(e.message);
    },
  });
  return { addCategory, isPending };
}
