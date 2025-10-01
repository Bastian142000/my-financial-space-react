import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import useCategoryForm from "../hooks/useCategoryForm";
import { useState } from "react";

export default function Category({ category }) {
  const [isEditing, setIsEditing] = useState(false);

  const form = useCategoryForm({ category: category.category_name });

  const handleSubmit = () => {
    form.setCategory(category.category_name);
    setIsEditing(false);
  };
  return (
    <li className="flex items-center justify-between overflow-y-auto rounded-xl border border-gray-200 bg-blue-50 p-5">
      {isEditing ? (
        <input
          type="text"
          value={form.category}
          onChange={(e) => form.setCategory(e.target.value)}
          maxLength={15}
          className="rounded-xl border border-gray-400 p-2"
        />
      ) : (
        category.category_name
      )}

      {/* Action buttons */}
      <div className="flex gap-1 lg:gap-5">
        <button className="cursor-pointer rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-white">
          <DeleteIcon fontSize="medium" />
        </button>
        <button
          onClick={() => (isEditing ? handleSubmit() : setIsEditing(true))}
          className={`cursor-pointer rounded-md p-2 transition-colors duration-300 ease-in-out hover:text-white ${isEditing ? "hover:bg-green-500" : "hover:bg-yellow-500"}`}
        >
          {isEditing ? (
            <DoneIcon fontSize="medium" />
          ) : (
            <EditNoteIcon fontSize="medium" />
          )}
        </button>
      </div>
    </li>
  );
}
