import Transaction from "./Transaction";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CustomModal from "../../../ui/CustomModal";
import { TableCell, TableRow } from "@mui/material";

export default function TransactionList({
  transactions,
  selectedItems,
  onCheckboxChange,
  onDeleteMany,
}) {
  return (
    <>
      {selectedItems.length > 1 && (
        <TableRow className="absolute top-3 right-2">
          <CustomModal
            title={"Delete all selected transactions?"}
            modalBorderColor={"border-none"}
            btnBorderColor={"border-none"}
            btnText={<DeleteForeverIcon fontSize="large" />}
            btnWidth={"w-fit"}
            btnTextColor={"text-black"}
            btnHoverTextColor={"hover:text-red-500"}
            onClick={onDeleteMany}
          ></CustomModal>
        </TableRow>
      )}
      {transactions.length < 1 && (
        <TableRow>
          <TableCell colSpan={7} align="center">
            Try adding a new transaction!
          </TableCell>
        </TableRow>
      )}
      {transactions.map((transaction) => (
        <TableRow key={transaction.id}>
          <Transaction
            transaction={transaction}
            selectedItems={selectedItems}
            onCheckboxChange={onCheckboxChange}
          />
        </TableRow>
      ))}
    </>
  );
}
