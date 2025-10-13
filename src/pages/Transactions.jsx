import TransactionTable from "../features/transactions/components/TransactionTable";
import TransactionList from "../features/transactions/components/TransactionList";
import useDeleteTransactions from "../features/transactions/hooks/useDeleteTransactions";
import useTransactions from "../features/transactions/hooks/useTransactions";
import useSelectTransactions from "../features/transactions/hooks/useSelectTransactions";
import TransactionsHeader from "../features/transactions/components/TransactionsHeader";
import TransactionsToolbar from "../features/transactions/components/TransactionsToolbar";
import { useCallback } from "react";

export default function Transactions() {
  const { transactions, isPending, error } = useTransactions();
  const { deleteTransactions } = useDeleteTransactions();

  const {
    selectedIds,
    handleSelect,
    handleSelectAll,
    clearSelection,
    isAllSelected,
    isIndeterminate,
  } = useSelectTransactions(transactions);

  const handleDelete = useCallback(() => {
    deleteTransactions({ ids: selectedIds });
    clearSelection();
  }, [selectedIds, deleteTransactions, clearSelection]);

  return (
    <div className="mx-auto mt-5 flex h-11/12 w-12/12 max-w-screen flex-col overflow-x-auto rounded-xl shadow-sm lg:h-12/12 lg:w-10/12 lg:overflow-x-hidden lg:border lg:border-gray-300">
      <TransactionsHeader />

      <TransactionsToolbar
        selectedCount={selectedIds.length}
        onDelete={handleDelete}
      />

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
