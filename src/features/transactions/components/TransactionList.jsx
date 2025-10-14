import Transaction from "./Transaction";
import SpinnerMini from "../../../ui/SpinnerMini";
import { TableCell, TableRow } from "@mui/material";

export default function TransactionList({
  transactions,
  error,
  isPending,
  selectedIds,
  onSelect,
}) {
  if (isPending)
    return (
      <TableRow>
        <TableCell colSpan={7} align="center">
          <SpinnerMini />
        </TableCell>
      </TableRow>
    );

  if (error)
    return (
      <TableRow>
        <TableCell colSpan={7} align="center">
          {error.message}{" "}
        </TableCell>
      </TableRow>
    );

  return (
    <>
      {transactions?.length < 1 && (
        <TableRow>
          <TableCell
            colSpan={7}
            align="center"
            sx={{ fontWeight: 600, fontSize: "18px" }}
          >
            Try adding a new transaction!
          </TableCell>
        </TableRow>
      )}
      {transactions?.map((transaction) => (
        <TableRow key={transaction.id}>
          <Transaction
            transaction={transaction}
            selectedIds={selectedIds}
            onSelect={onSelect}
          />
        </TableRow>
      ))}
    </>
  );
}
