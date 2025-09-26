import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomModal from "../../../ui/CustomModal";
import SelectTransaction from "./SelectTransaction";
import { TableCell } from "@mui/material";

export default function Transaction({
  transaction,
  selectedItems,
  onCheckboxChange,
}) {
  async function handleDelete() {}

  function handleUpdate() {}

  return (
    <>
      <SelectTransaction
        selectedItems={selectedItems}
        onCheckboxChange={onCheckboxChange}
      />
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.Category?.category_name}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.description}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.type}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.amount}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.date}
      </TableCell>
      <TableCell>
        <div className="flex justify-center gap-5">
          <CustomModal
            title={"Delete selected transaction?"}
            modalBorderColor={"border-white"}
            btnWidth={"w-fit"}
            btnBorderColor={"border-white"}
            btnTextColor={"text-black"}
            btnHoverBgColor={"hover:bg-red-500"}
            btnHoverTextColor={"hover:text-white"}
            btnText={<DeleteIcon />}
            onClick={handleDelete}
          ></CustomModal>

          <CustomModal
            title={"Modify transaction"}
            modalBorderColor={"border-gray-300"}
            btnWidth={"w-fit"}
            btnBorderColor={"border-white"}
            btnTextColor={"text-black"}
            btnHoverBgColor={"hover:bg-yellow-500"}
            btnHoverTextColor={"hover:text-white"}
            btnText={<EditNoteIcon />}
            onClick={handleUpdate}
          ></CustomModal>
        </div>
      </TableCell>
    </>
  );
}
