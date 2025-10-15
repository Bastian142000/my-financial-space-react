import Button from "../ui/Button";
import CategoryList from "../features/categories/components/CategoriesList";
import useCategoryForm from "../features/categories/hooks/useCategoryForm";
import useAddCategory from "../features/categories/hooks/useAddCategory";
import CategoryForm from "../features/categories/components/CategoryForm";
import useUser from "../features/auth/hooks/useUser";

export default function Categories() {
  const form = useCategoryForm();

  const { addCategory, isPending } = useAddCategory();

  const { user } = useUser();

  const handleAddCategory = () => {
    if (form.category === "") return;
    addCategory({ category: form.category, user_id: user.id });
    form.reset();
  };
  return (
    <div className="mx-auto mt-5 flex h-120 w-11/12 max-w-screen flex-col overflow-x-auto rounded-xl shadow-sm lg:h-full lg:w-10/12 lg:overflow-x-hidden lg:border lg:border-gray-300">
      {/* Title and Subtitle */}
      <div className="flex w-12/12 flex-col gap-3 overflow-auto text-2xl lg:m-7 lg:px-7">
        <h1 className="font-semibold">Add new categories</h1>
        <h2 className="text-base text-gray-600">
          Here you can register custom categories
        </h2>
      </div>

      {/* Content */}
      <div className="mx-auto flex h-10/12 max-h-10/12 w-12/12 flex-col overflow-y-auto rounded-2xl lg:w-8/12 lg:border lg:border-gray-300">
        <div className="flex h-25 items-center justify-center gap-1 border-b border-gray-300 lg:gap-5">
          <CategoryForm {...form} placeholder={"Category..."} />
          <Button
            height={"h-12"}
            width={"w-fit"}
            type={"submit"}
            borderColor={"border-green-400"}
            textColor={"text-green-600"}
            hoverBgColor={"hover:bg-green-400"}
            hoverTextColor={"hover:text-white"}
            disabled={isPending}
            onClick={handleAddCategory}
          >
            Add
          </Button>
        </div>
        <div className="mx-auto mt-5 max-h-190 w-10/12 overflow-y-auto">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
