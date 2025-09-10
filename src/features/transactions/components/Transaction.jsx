import { TableCell } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function Transaction({ transaction }) {
  return (
    <>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.description}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.category.category_name}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.type}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.amount}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.date}
      </TableCell>{" "}
      <TableCell>
        <div className="flex justify-center gap-5">
          <span className="hover:text-red-500">
            <DeleteForeverIcon />
          </span>{" "}
          <span className="hover:text-yellow-500">
            <EditNoteIcon />
          </span>
        </div>
      </TableCell>
    </>
  );
}
