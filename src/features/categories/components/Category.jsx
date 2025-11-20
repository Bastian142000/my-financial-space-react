import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import useCategoryForm from "../hooks/useCategoryForm";
import useUpdateCategory from "../hooks/useUpdateCategory";
import useDeleteCategory from "../hooks/useDeleteCategory";
import CategoryForm from "./CategoryForm";
import Button from "../../../ui/Button/Button";

export default function Category({ category }) {
  const [isEditing, setIsEditing] = useState(false);

  const form = useCategoryForm({ category: category.category_name });

  const { updateCategory, isPending } = useUpdateCategory();

  const { deleteCategory, isPending: isDeleting } = useDeleteCategory();

  const handleSubmit = () => {
    form.setCategory(category.category_name);
    updateCategory({
      id: category.id,
      category: form.category,
    });

    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteCategory({ id: category.id });
  };
  return (
    <li
      data-cy="category-dynamic-input"
      className="flex items-center justify-between overflow-y-auto rounded-xl border border-gray-200 bg-blue-50 p-5"
    >
      {isEditing ? <CategoryForm {...form} /> : category.category_name}

      {/* Action buttons */}
      <div className="flex gap-1 lg:gap-5">
        {category.user_id === null ? (
          ""
        ) : (
          <Button
            data-cy="delete-category"
            icon={<DeleteIcon fontSize="medium" />}
            variant="outlineDanger"
            spinnerVariant="primary"
            size="md"
            isLoading={isDeleting}
            disabled={isDeleting}
            type="submit"
            onClick={handleDelete}
          ></Button>
        )}
        {category.user_id === null ? (
          ""
        ) : (
          <Button
            data-cy="update-category"
            icon={
              isEditing ? (
                <DoneIcon data-cy="confirm-update-category" fontSize="medium" />
              ) : (
                <EditNoteIcon data-cy="update-category" fontSize="medium" />
              )
            }
            variant="outlineWarning"
            spinnerVariant="primary"
            size="md"
            isLoading={isPending}
            disabled={isPending}
            onClick={() => (isEditing ? handleSubmit() : setIsEditing(true))}
          ></Button>
        )}
      </div>
    </li>
  );
}
