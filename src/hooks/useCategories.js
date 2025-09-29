import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/categories";

export default function useCategories() {
  const {
    data: categories,
    isPending,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return { categories, isPending, error };
}
