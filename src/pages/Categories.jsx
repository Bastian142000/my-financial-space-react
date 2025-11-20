import AddIcon from "@mui/icons-material/Add";
import Button from "../ui/Button/Button";
import CategoryList from "../features/categories/components/CategoriesList";
import useCategoryForm from "../features/categories/hooks/useCategoryForm";
import useAddCategory from "../features/categories/hooks/useAddCategory";
import CategoryForm from "../features/categories/components/CategoryForm";
import useUser from "../features/auth/hooks/useUser";
import toast from "react-hot-toast";
import BaseLayout from "../ui/BaseLayout/BaseLayout";

export default function Categories() {
  const form = useCategoryForm();

  const { addCategory, isPending } = useAddCategory();

  const { user } = useUser();

  const handleAddCategory = () => {
    if (form.category === "") return toast.error("Category can't be empty");
    addCategory({ category: form.category, user_id: user.id });
    form.reset();
  };
  return (
    <BaseLayout
      title={"Add new categories"}
      subtitle={"Here you can register custom categories"}
    >
      {/* Content */}
      <div className="mx-auto flex h-full w-12/12 flex-col overflow-y-auto rounded-2xl border border-gray-300">
        <div className="flex flex-col items-center justify-center gap-1 border-b border-gray-300 p-5 lg:flex-row lg:items-end lg:gap-5">
          <CategoryForm {...form} placeholder={"Category..."} />
          <Button
            label={"Add"}
            icon={<AddIcon />}
            variant="primary"
            size="md"
            isLoading={isPending}
            disabled={isPending}
            type="submit"
            onClick={handleAddCategory}
          ></Button>
        </div>
        <div className="mx-auto mt-5 max-h-190 w-10/12 overflow-y-auto">
          <CategoryList />
        </div>
      </div>
    </BaseLayout>
  );
}
