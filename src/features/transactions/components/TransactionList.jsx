import Transaction from "./Transaction";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { loadTransactions } from "./TransactionsSlice";
import { deleteTransactions } from "./TransactionThunks";
import CustomModal from "../../../ui/CustomModal";

export default function TransactionList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { transactions, status, error } = useSelector(
    (state) => state.transactions,
  );

  const { data } = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.transactions) dispatch(loadTransactions(data?.transactions));
  }, [data?.transactions, dispatch]);

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

  return (
    <>
      {selectedItems.length > 1 && (
        <TableRow className="absolute top-0 right-3">
          <CustomModal
            title={"Delete all selected transactions?"}
            modalBorderColor={"border-none"}
            btnBorderColor={"border-none"}
            btnText={<DeleteForeverIcon fontSize="large" />}
            btnWidth={"w-fit"}
            btnTextColor={"text-black"}
            btnHoverTextColor={"hover:text-red-500"}
            onClick={handleDeleteMany}
          ></CustomModal>
        </TableRow>
      )}
      {transactions.length < 1 && (
        <TableRow>
          <TableCell colSpan={7} align="center">
            Try adding a new transaction!
          </TableCell>
        </TableRow>
      )}
      {transactions.map((transaction) => (
        <TableRow key={transaction.id}>
          <Transaction
            transaction={transaction}
            selectedItems={selectedItems}
            onCheckboxChange={handleCheckboxChange}
          />
        </TableRow>
      ))}
    </>
  );
}
