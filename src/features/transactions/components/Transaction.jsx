import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomModal from "../../../ui/CustomModal";
import { TableCell } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "./TransactionThunks";

export default function Transaction({ transaction }) {
  const dispatch = useDispatch();
  async function handleDelete() {
    try {
      await dispatch(deleteTransaction(transaction.id)).unwrap();
    } catch (err) {
      console.error("Error adding transaction:", err);
      throw err;
    }
  }
  function handleUpdate() {}
  return (
    <>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.description}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.category.category_name}
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
            btnText={<DeleteForeverIcon />}
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
