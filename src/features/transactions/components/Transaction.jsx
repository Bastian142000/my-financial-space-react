import { TableCell } from "@mui/material";

export default function Transaction({ transaction }) {
  return (
    <>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>{transaction.category}</TableCell>
      <TableCell>{transaction.type}</TableCell>
      <TableCell align="right">{transaction.amount}</TableCell>
      <TableCell>{transaction.date}</TableCell>
    </>
  );
}
