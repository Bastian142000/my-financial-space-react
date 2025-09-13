import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import TransactionList from "../components/TransactionList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../transactions/components/TransactionsSlice";
import useCategories from "../../../hooks/useCategories";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("INCOME");
  const [amount, setAmount] = useState(0);

  const { categories, category, setCategory, error, isLoading } =
    useCategories();
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(Number(e.target.value));
  const handleTypeChange = (e) => setType(e.target.value);
  const handleAmountChange = (e) => {
    let value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (value === "" || (Number(value) >= 1 && Number(value) <= 999999999)) {
        setAmount(Number(e.target.value));
      }
    }
  };

  if (error) {
    return <span>{error}</span>;
  }

  if (isLoading) return <span>Loading...</span>;

  function cleanInputs() {
    setDescription("");
    setCategory(1);
    setType("INCOME");
    setAmount(0);
  }

  async function handleSubmit(e) {
    e.preventDefault();

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
    }
  }

  return (
    <div className="mt-5 flex h-11/12 max-w-screen flex-col overflow-x-auto rounded-xl border border-gray-300 shadow-sm lg:overflow-x-hidden">
      {/* Title and Subtitle */}
      <div className="m-7 flex flex-col gap-3 px-7 text-2xl">
        <h1 className="font-semibold">Add new transactions</h1>
        <h2 className="text-base text-gray-600">
          Here you can register a new transaction on the current month
        </h2>
      </div>

      {/* Modal with form */}
      <div className="mx-auto flex w-11/12 justify-end">
        <CustomModal
          title={"Register a new transaction"}
          btnText={"Add transaction"}
          onClick={handleSubmit}
        >
          <TransactionForm
            description={description}
            category={category}
            type={type}
            amount={amount}
            categories={categories}
            onDescriptionChange={handleDescriptionChange}
            onCategoryChange={handleCategoryChange}
            onTypeChange={handleTypeChange}
            onAmountChange={handleAmountChange}
          />
        </CustomModal>
      </div>

      {/* Table UI */}
      <TransactionTable>
        <TransactionList
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </TransactionTable>
    </div>
  );
}
