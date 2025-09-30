import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function Category({ category }) {
  return (
    <li className="flex items-center justify-between overflow-y-auto rounded-xl border border-gray-200 bg-blue-50 p-5">
      {category.category_name}

      {/* Action buttons */}
      <div className="flex gap-1 lg:gap-5">
        <button className="cursor-pointer rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-white">
          <DeleteIcon fontSize="medium" />
        </button>
        <button className="cursor-pointer rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white">
          <EditNoteIcon fontSize="medium" />
        </button>
      </div>
    </li>
  );
}
