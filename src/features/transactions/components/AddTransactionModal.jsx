import useCategories from "../../../hooks/useCategories";
import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import useAddTransaction from "../hooks/useAddTransaction";
import useUser from "../../auth/hooks/useUser";
import useTransactionForm from "../hooks/useTransactionForm";

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
      btnWidth={"w-fit"}
      btnBorderColor={"border-green-400"}
      btnTextColor={"text-green-600"}
      btnHoverBgColor={"hover:bg-green-400"}
      btnHoverTextColor={"hover:text-white"}
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
