import Transaction from "./Transaction";
import { TableCell, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { loadTransactions } from "./TransactionsSlice";

export default function TransactionList() {
  const { transactions, status, error } = useSelector(
    (state) => state.transactions,
  );

  const { data } = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.transactions) dispatch(loadTransactions(data?.transactions));
  }, [data?.transactions, dispatch]);

  if (status === "loading") {
    return (
      <TableRow>
        <TableCell colSpan={6}>Loading...</TableCell>
      </TableRow>
    );
  }

  if (status === "failed") {
    return (
      <TableRow>
        <TableCell colSpan={6}>Error: {error}</TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {transactions.map((transaction) => (
        <TableRow key={transaction.id}>
          <Transaction transaction={transaction} />
        </TableRow>
      ))}
    </>
  );
}
