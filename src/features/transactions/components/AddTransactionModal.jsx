import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import useCategories from "../../../hooks/useCategories";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../components/TransactionThunks";

export default function AddTransactionModal() {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("INCOME");
  const [amount, setAmount] = useState(0);

  const transactionStatus = useSelector((state) => state.transactions.status);
  const user_id = useSelector((state) => state.auth.user_id);

  const { categories, category, setCategory } = useCategories();

  const dispatch = useDispatch();

  function cleanInputs() {
    setDescription("");
    setCategory(1);
    setType("INCOME");
    setAmount(0);
  }

  async function handleSubmit() {
    if (amount < 1) return;

    const payload = {
      description,
      category_id: category,
      type,
      amount,
      user_id,
    };

    try {
      await dispatch(addTransaction(payload)).unwrap();
      cleanInputs();
    } catch (err) {
      console.error("Error adding transaction:", err);
      throw err;
    }
  }
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
      status={transactionStatus}
      onClick={handleSubmit}
    >
      <TransactionForm
        description={description}
        category={category}
        type={type}
        amount={amount}
        categories={categories}
        setDescription={setDescription}
        setCategory={setCategory}
        setType={setType}
        setAmount={setAmount}
      />
    </CustomModal>
  );
}
