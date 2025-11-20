import useCategories from "../../../hooks/useCategories";
import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import useAddTransaction from "../hooks/useAddTransaction";
import useUser from "../../auth/hooks/useUser";
import useTransactionForm from "../hooks/useTransactionForm";
import AddIcon from "@mui/icons-material/Add";

export default function AddTransactionModal() {
  const form = useTransactionForm();

  const { categories, isPending, error } = useCategories();

  const { addTransaction, isPending: isAdding } = useAddTransaction();

  const { user } = useUser();

  const handleSubmit = () => {
    addTransaction({
      amount: form.amount,
      type: form.type,
      description: form.description,
      category_id: form.categoryId,
      user_id: user.id,
    });
    form.reset();
  };

  return (
    <CustomModal
      title={"Register a new transaction"}
      modalBorderColor={"border-gray-300"}
      btnText={"Add transaction"}
      btnIcon={<AddIcon />}
      isPending={isAdding}
      onClick={handleSubmit}
    >
      <TransactionForm
        {...form}
        categories={categories}
        isPending={isPending}
        error={error}
      />
    </CustomModal>
  );
}
