import { useState } from "react";

export default function useCategoryForm(initial = {}) {
  const [category, setCategory] = useState(initial.category || "");
  return { category, setCategory, reset: () => setCategory("") };
}
