import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TransactionTable({ children }) {
  return (
    <TableContainer className="relative mx-auto mt-3 flex max-h-9/12 max-w-11/12 cursor-pointer rounded-md border border-gray-100 shadow-sm">
      <Table>
        <TableHead className="bg-blue-300">
          <TableRow>
            <TableCell sx={{ fontSize: "16px" }}>Select</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Category</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Description</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Type</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Amount ($)</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Date</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
