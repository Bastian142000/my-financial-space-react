import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import useCategoryForm from "../hooks/useCategoryForm";
import useUpdateCategory from "../hooks/useUpdateCategory";
import useDeleteCategory from "../hooks/useDeleteCategory";
import CategoryForm from "./CategoryForm";
import { useState } from "react";

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
          <button
            data-cy="delete-category"
            type="submit"
            onClick={handleDelete}
            disabled={isDeleting}
            className="cursor-pointer rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-white"
          >
            <DeleteIcon fontSize="medium" />
          </button>
        )}
        {category.user_id === null ? (
          ""
        ) : (
          <button
            onClick={() => (isEditing ? handleSubmit() : setIsEditing(true))}
            disabled={isPending}
            className={`cursor-pointer rounded-md p-2 transition-colors duration-300 ease-in-out hover:text-white ${isEditing ? "hover:bg-green-500" : "hover:bg-yellow-500"}`}
          >
            {isEditing ? (
              <DoneIcon data-cy="confirm-update-category" fontSize="medium" />
            ) : (
              <EditNoteIcon data-cy="update-category" fontSize="medium" />
            )}
          </button>
        )}
      </div>
    </li>
  );
}
