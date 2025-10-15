import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomModal from "../../../ui/CustomModal";
import SelectTransaction from "./SelectTransaction";
import useDeleteTransactions from "../hooks/useDeleteTransactions";
import TransactionForm from "./TransactionForm";
import useTransactionForm from "../hooks/useTransactionForm";
import useCategories from "../../../hooks/useCategories";
import useUpdateTransaction from "../hooks/useUpdateTransaction";
import { TableCell } from "@mui/material";

export default function Transaction({ selectedIds, onSelect, transaction }) {
  const form = useTransactionForm({
    description: transaction.description,
    type: transaction.type,
    amount: transaction.amount,
    categoryId: transaction.category_id,
  });

  const date = new Date(transaction.date);

  const { deleteTransactions } = useDeleteTransactions();

  const { updateTransaction } = useUpdateTransaction();

  const { categories, isPending, error } = useCategories();

  const handleEdit = () => {
    updateTransaction({
      id: transaction.id,
      amount: form.amount,
      type: form.type,
      description: form.description,
      category_id: form.categoryId,
    });
  };

  return (
    <>
      <TableCell></TableCell>
      <SelectTransaction
        transaction={transaction}
        selectedIds={selectedIds}
        onSelect={onSelect}
      />
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.Category?.category_name}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.description}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {transaction.type}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        ${transaction.amount.toLocaleString()}
      </TableCell>
      <TableCell sx={{ "&:hover": { backgroundColor: "#f6f6f6" } }}>
        {date.toLocaleDateString()}
      </TableCell>
      <TableCell>
        <div className="flex justify-center gap-5">
          <CustomModal
            title={"Delete selected transaction?"}
            modalBorderColor={"border-white"}
            btnType={"submit"}
            btnWidth={"w-fit"}
            btnBorderColor={"border-white"}
            btnTextColor={"text-black"}
            btnHoverBgColor={"hover:bg-red-500"}
            btnHoverTextColor={"hover:text-white"}
            btnText={<DeleteIcon data-cy="delete-transaction" />}
            onClick={() => deleteTransactions({ ids: [transaction.id] })}
          ></CustomModal>

          <CustomModal
            title={"Modify transaction"}
            modalBorderColor={"border-gray-300"}
            btnType={"submit"}
            btnWidth={"w-fit"}
            btnBorderColor={"border-white"}
            btnTextColor={"text-black"}
            btnHoverBgColor={"hover:bg-yellow-500"}
            btnHoverTextColor={"hover:text-white"}
            btnText={<EditNoteIcon data-cy="update-transaction" />}
            onClick={() => handleEdit(transaction)}
          >
            <TransactionForm
              {...form}
              categories={categories}
              isPending={isPending}
              error={error}
            />
          </CustomModal>
        </div>
      </TableCell>
    </>
  );
}
