import Transaction from "./Transaction";
import SpinnerMini from "../../../ui/SpinnerMini";
import { TableCell, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../../services/transactions";

export default function TransactionList({ selectedItems, onCheckboxChange }) {
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  if (isLoading) return <SpinnerMini />;

  if (error) return <span>{error.message}</span>;
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
