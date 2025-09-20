import Transaction from "./Transaction";
import { TableCell, TableRow } from "@mui/material";

export default function TransactionList({
  transactions,
  selectedItems,
  onCheckboxChange,
}) {
  return (
    <>
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
