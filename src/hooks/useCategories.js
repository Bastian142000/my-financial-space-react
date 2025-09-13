import { useEffect, useState } from "react";
import { fetchCategories } from "../services/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      async function getCategories() {
        const { status, data, error } = await fetchCategories();

        if (error) {
          setError(error);
          return;
        }

        if (status === 200) setCategories(data.categories);

        if (data.categories.length > 0) {
          setCategory(Number(data.categories[0].id));
        }
      }
      getCategories();
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { categories, category, setCategory, error, isLoading };
}
