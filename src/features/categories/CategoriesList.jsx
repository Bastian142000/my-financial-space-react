import useCategories from "../../hooks/useCategories";
import SpinnerMini from "../../ui/SpinnerMini";
import Category from "./Category";

export default function CategoriesList() {
  const { categories, isPending, error } = useCategories();
  return (
    <ul className="flex flex-col gap-10">
      {isPending && <SpinnerMini />}
      {error && <span>{error}</span>}
      {categories &&
        categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
    </ul>
  );
}
