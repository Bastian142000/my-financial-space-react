import TransactionList from "../components/TransactionList";
import CustomModal from "../../../ui/CustomModal";
import TransactionForm from "../components/TransactionForm";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createTransaction } from "../../../services/transactions";
import { fetchCategories } from "../../../services/categories";

export default function Transactions() {
  const [isOpen, setIsOpen] = useState(true);
  const [description, setDescription] = useState("Card");
  const [category, setCategory] = useState(0);
  const [type, setType] = useState("EXPENSE");
  const [amount, setAmount] = useState(1000);
  const [categories, setCategories] = useState([]);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(Number(e.target.value));
  const handleTypeChange = (e) => setType(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  useEffect(() => {
    try {
      async function getCategories() {
        const { status, data, error } = await fetchCategories();

        if (error) return;

        if (status === 200) setCategories(data.categories);

        if (data.categories.length > 0) {
          setCategory(Number(data.categories[0].id));
        }
      }
      getCategories();
    } catch (e) {
      console.error(e);
    }
  }, []);

  async function handleSubmit() {
    const { status, data, error } = await createTransaction(
      description,
      category,
      type,
      amount,
      6,
    );
  }

  return (
    <div className="mt-5 flex h-11/12 max-w-screen flex-col overflow-x-auto rounded-xl border border-gray-300 shadow-sm lg:overflow-x-hidden">
      <div className="m-7 flex flex-col gap-3 px-7 text-2xl">
        <h1 className="font-semibold">Add new transactions</h1>
        <h2 className="text-base text-gray-600">
          Here you can register a new transaction on the current month
        </h2>
      </div>

      <div className="mx-auto flex w-11/12 justify-end">
        <CustomModal
          title={"Register a new transaction"}
          btnText={"Add transaction"}
          open={isOpen}
          handleIsOpen={(isOpen) => setIsOpen(!isOpen)}
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

      <TableContainer className="mx-auto mt-3 flex max-w-11/12 cursor-pointer rounded-md border border-gray-100 shadow-sm">
        <Table>
          <TableHead className="bg-blue-chalk-100">
            <TableRow>
              <TableCell sx={{ fontSize: "16px" }}>Description</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Category</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Type</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Amount $</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Date</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TransactionList />
        </Table>
      </TableContainer>
    </div>
  );
}
