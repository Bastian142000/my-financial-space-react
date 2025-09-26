import { TableCell } from "@mui/material";

export default function SelectTransaction({
  transaction,
  selectedItems,
  onCheckboxChange,
}) {
  return (
    <TableCell
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5.1rem",
        "&:hover": { backgroundColor: "#f6f6f6" },
      }}
    >
      <input
        type="checkbox"
        //checked={selectedItems.includes(Number(transaction.id))}
        //value={transaction.id}
        onChange={onCheckboxChange}
        className="h-4 w-4 cursor-pointer text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
    </TableCell>
  );
}
