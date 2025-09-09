import { TableBody, TableCell, TableRow } from "@mui/material";
import Transaction from "./Transaction";
import { useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <TableBody>
      {isLoading && (
        <TableRow>
          <TableCell colSpan={5}>Loading...</TableCell>
        </TableRow>
      )}

      {error && (
        <TableRow>
          <TableCell colSpan={5}>Error loading transactions</TableCell>
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
