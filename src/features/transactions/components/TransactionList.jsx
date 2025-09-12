import Transaction from "./Transaction";
import { TableCell, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

export default function TransactionList({ transactions, setTransactions }) {
  const { data, error } = useLoaderData();

  useEffect(() => {
    if (data?.transactions) setTransactions(data?.transactions);
  }, [data?.transactions, setTransactions]);

  if (error) {
    return (
      <TableRow key={"error-row"}>
        <TableCell colSpan={6}>Error loading transactions</TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {transactions &&
        transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <Transaction transaction={transaction} />
          </TableRow>
        ))}
    </>
  );
}
