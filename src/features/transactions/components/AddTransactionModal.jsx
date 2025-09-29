import useCategories from "../../../hooks/useCategories";
import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import { useState } from "react";

export default function AddTransactionModal() {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("INCOME");
  const [amount, setAmount] = useState(0);

  const { categories, isPending, error } = useCategories();

  async function handleSubmit() {}
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
        isPending={isPending}
        error={error}
      />
    </CustomModal>
  );
}
