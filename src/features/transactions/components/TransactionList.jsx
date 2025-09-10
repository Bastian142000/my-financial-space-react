import Transaction from "./Transaction";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  const { data, error } = useLoaderData();

  useEffect(() => {
    if (data?.transactions) setTransactions(data?.transactions);
  }, [data?.transactions]);

  return (
    <TableBody>
      {error && (
        <TableRow>
          <TableCell colSpan={6}>Error loading transactions</TableCell>
        </TableRow>
      )}

      {transactions &&
        transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <Transaction transaction={transaction} />
          </TableRow>
        ))}
    </TableBody>
  );
}
