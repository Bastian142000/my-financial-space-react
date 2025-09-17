import TransactionTable from "../components/TransactionTable";
import TransactionList from "../components/TransactionList";
import AddTransactionModal from "../components/AddTransactionModal";
import { TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { loadTransactions } from "../components/TransactionsSlice";
import { deleteTransactions } from "../components/TransactionThunks";

export default function Transactions() {
  const [selectedItems, setSelectedItems] = useState([]);

  const { transactions, status, error } = useSelector(
    (state) => state.transactions,
  );

  const { data } = useLoaderData();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.transactions) dispatch(loadTransactions(data?.transactions));
  }, [data?.transactions, dispatch]);

  function handleCheckboxChange(e) {
    const id = Number(e.target.value);
    const checked = e.target.checked;

    setSelectedItems((prev) => {
      if (checked) {
        return [...prev, id];
      } else {
        return prev.filter((item) => item !== id);
      }
    });
  }

  async function handleDeleteMany() {
    try {
      await dispatch(deleteTransactions(selectedItems)).unwrap();
    } catch (err) {
      console.error("Error deleting transactions:", err);
      throw err;
    }
  }

  function handleSelectAll(e) {
    if (e.target.checked) {
      const allIds = transactions.map((t) => Number(t.id));
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  }
  const allSelected =
    transactions.length > 0 && selectedItems.length === transactions.length;
  const partiallySelected =
    selectedItems.length > 0 && selectedItems.length < transactions.length;

  if (status === "loading") {
    return (
      <TableRow>
        <TableCell colSpan={6}>Loading...</TableCell>
      </TableRow>
    );
  }

  if (status === "failed") {
    return (
      <TableRow>
        <TableCell colSpan={6}>Error: {error}</TableCell>
      </TableRow>
    );
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
        <AddTransactionModal />
      </div>

      {/* Table UI */}
      <TransactionTable
        transactions={transactions}
        allSelected={allSelected}
        partiallySelected={partiallySelected}
        onSelectAll={handleSelectAll}
      >
        <TransactionList
          transactions={transactions}
          selectedItems={selectedItems}
          onCheckboxChange={handleCheckboxChange}
          onDeleteMany={handleDeleteMany}
        />
      </TransactionTable>
    </div>
  );
}
