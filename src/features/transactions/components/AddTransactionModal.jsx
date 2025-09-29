import useCategories from "../../../hooks/useCategories";
import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import useAddTransaction from "../hooks/useAddTransaction";
import useUser from "../../auth/hooks/useUser";
import { useState } from "react";

export default function AddTransactionModal() {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("INCOME");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(1);

  const { categories, isPending, error } = useCategories();

  const { addTransaction, isPending: isAdding } = useAddTransaction();

  const { user } = useUser();

  const handleSubmit = () => {
    addTransaction({
      amount,
      type,
      description,
      category_id: categoryId,
      user_id: user.id,
    });
    setAmount(0);
    setType("INCOME");
    setDescription("");
    setCategoryId(1);
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
        description={description}
        type={type}
        amount={amount}
        setDescription={setDescription}
        setType={setType}
        setAmount={setAmount}
        categories={categories}
        category={categoryId}
        setCategory={setCategoryId}
        isPending={isPending}
        error={error}
      />
    </CustomModal>
  );
}
