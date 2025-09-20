import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TransactionTable({
  transactions,
  allSelected,
  partiallySelected,
  onSelectAll,
  children,
}) {
  return (
    <TableContainer className="relative mx-auto mt-3 flex max-h-9/12 max-w-11/12 cursor-pointer rounded-md border border-gray-100 shadow-sm">
      <Table>
        <TableHead className="bg-blue-300">
          <TableRow>
            <TableCell align="center">
              {transactions.length > 0 && (
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = partiallySelected;
                  }}
                  onChange={onSelectAll}
                  className="h-4 w-4 cursor-pointer text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
              )}
            </TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Select</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Description</TableCell>
            <TableCell sx={{ fontSize: "16px" }}>Category</TableCell>
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
