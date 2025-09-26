import TransactionTable from "../features/transactions/components/TransactionTable";
import TransactionList from "../features/transactions/components/TransactionList";
import AddTransactionModal from "../features/transactions/components/AddTransactionModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CustomModal from "../ui/CustomModal";
import { useState } from "react";

export default function Transactions() {
  const [selectedItems, setSelectedItems] = useState([]);

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

  async function handleDeleteMany() {}

  function handleSelectAll(e) {}

  return (
    <div className="mx-auto mt-5 flex h-11/12 w-8/12 max-w-screen flex-col overflow-x-auto rounded-xl border border-gray-300 shadow-sm lg:h-11/12 lg:w-10/12 lg:overflow-x-hidden">
      {/* Title and Subtitle */}
      <div className="m-7 flex flex-col gap-3 overflow-auto px-7 text-2xl">
        <h1 className="font-semibold">Add new transactions</h1>
        <h2 className="text-base text-gray-600">
          Here you can register a new transaction on the current month
        </h2>
      </div>

      {/* Modal with form */}
      <div className="mx-auto flex w-fit justify-end lg:w-11/12">
        <AddTransactionModal />
        {selectedItems.length > 1 && (
          <div className="flex h-10 items-center">
            <CustomModal
              title={"Delete all selected transactions?"}
              modalBorderColor={"border-none"}
              btnBorderColor={"border-none"}
              btnText={<DeleteForeverIcon fontSize="large" />}
              btnWidth={"w-fit"}
              btnTextColor={"text-red-500"}
              btnHoverTextColor={"hover:text-red-500"}
              onClick={handleDeleteMany}
            ></CustomModal>
          </div>
        )}
      </div>

      {/* Table UI */}
      <TransactionTable onSelectAll={handleSelectAll}>
        <TransactionList />
      </TransactionTable>
    </div>
  );
}
