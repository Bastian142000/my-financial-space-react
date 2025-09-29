import { TableCell } from "@mui/material";

export default function SelectAllTransactions({
  handleSelectAll,
  isAllSelected,
  isIndeterminate,
}) {
  return (
    <TableCell sx={{ fontSize: "16px" }}>
      <input
        type="checkbox"
        checked={isAllSelected}
        ref={(input) => {
          if (input) input.indeterminate = isIndeterminate;
        }}
        onChange={handleSelectAll}
      />
    </TableCell>
  );
}
