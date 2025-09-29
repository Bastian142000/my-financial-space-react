import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomModal from "../../../ui/CustomModal";
import SelectTransaction from "./SelectTransaction";
import { TableCell } from "@mui/material";
import useDeleteTransactions from "../hooks/useDeleteTransactions";

export default function Transaction({ selectedIds, onSelect, transaction }) {
  const date = new Date(transaction.date);
  const { deleteTransactions } = useDeleteTransactions();
  return (
    <>
      <TableCell></TableCell>
      <SelectTransaction
        transaction={transaction}
        selectedIds={selectedIds}
        onSelect={onSelect}
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
        {date.toLocaleDateString()}
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
            onClick={() => deleteTransactions({ ids: [transaction.id] })}
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
          ></CustomModal>
        </div>
      </TableCell>
    </>
  );
}
