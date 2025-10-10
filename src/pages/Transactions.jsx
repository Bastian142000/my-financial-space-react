import TransactionTable from "../features/transactions/components/TransactionTable";
import TransactionList from "../features/transactions/components/TransactionList";
import AddTransactionModal from "../features/transactions/components/AddTransactionModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CustomModal from "../ui/CustomModal";
import useDeleteTransactions from "../features/transactions/hooks/useDeleteTransactions";
import useTransactions from "../features/transactions/hooks/useTransactions";
import { useState } from "react";

export default function Transactions() {
  const { transactions, isPending, error } = useTransactions();

  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (itemId) => {
    setSelectedIds((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.length === transactions.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(transactions.map((t) => t.id));
    }
  };

  const { deleteTransactions } = useDeleteTransactions();

  const handleDelete = () => {
    deleteTransactions({ ids: selectedIds });
    setSelectedIds([]);
  };

  const isAllSelected = selectedIds.length === transactions?.length;

  const isIndeterminate =
    selectedIds.length > 0 && selectedIds.length < transactions.length;

  return (
    <div className="mx-auto mt-5 flex h-11/12 w-12/12 max-w-screen flex-col overflow-x-auto rounded-xl shadow-sm lg:h-12/12 lg:w-10/12 lg:overflow-x-hidden lg:border lg:border-gray-300">
      {/* Title and Subtitle */}
      <div className="flex h-full w-12/12 flex-col gap-3 overflow-auto p-5 text-2xl lg:m-7 lg:h-20 lg:p-0 lg:px-7">
        <h1 className="text-md font-semibold">Add new transactions</h1>
        <h2 className="text-base text-gray-600">
          Here you can register a new transaction on the current month
        </h2>
      </div>

      {/* Modal with form */}
      <div className="mx-auto flex w-fit items-center justify-end pt-5 lg:w-11/12">
        <AddTransactionModal />

        {selectedIds?.length > 1 && (
          <CustomModal
            title={"Delete all selected transations?"}
            modalBorderColor={"border-none"}
            btnText={<DeleteForeverIcon fontSize="large" />}
            btnBorderColor={"border-none"}
            btnHoverTextColor={"hover:text-red-500"}
            btnTextColor={"text-black"}
            onClick={handleDelete}
          ></CustomModal>
        )}
      </div>

      {/* Table UI */}
      <TransactionTable
        handleSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
        isIndeterminate={isIndeterminate}
      >
        <TransactionList
          transactions={transactions}
          isPending={isPending}
          error={error}
          selectedIds={selectedIds}
          onSelect={handleSelect}
        />
      </TransactionTable>
    </div>
  );
}
