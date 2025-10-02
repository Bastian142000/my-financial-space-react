import useCategories from "../../../hooks/useCategories";
import SpinnerMini from "../../../ui/SpinnerMini";
import Category from "./Category";

export default function CategoriesList() {
  const { categories, isPending, error } = useCategories();
  const customCategories = categories?.filter((c) => c.user_id !== null);
  const isEmpty = customCategories?.length === 0;
  return (
    <ul className="flex flex-col gap-10">
      {isPending && <SpinnerMini />}
      {error && <span>{error}</span>}
      {isEmpty && (
        <span className="flex justify-center text-lg font-semibold">
          Try adding a new custom category!
        </span>
      )}
      {categories &&
        customCategories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
    </ul>
  );
}
