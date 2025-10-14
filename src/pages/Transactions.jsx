import TransactionTable from "../features/transactions/components/TransactionTable";
import TransactionList from "../features/transactions/components/TransactionList";
import useDeleteTransactions from "../features/transactions/hooks/useDeleteTransactions";
import useTransactions from "../features/transactions/hooks/useTransactions";
import useSelectTransactions from "../features/transactions/hooks/useSelectTransactions";
import TransactionsHeader from "../features/transactions/components/TransactionsHeader";
import TransactionsToolbar from "../features/transactions/components/TransactionsToolbar";
import ReactPaginate from "react-paginate";
import { useCallback, useState } from "react";

const postsPerPage = 10;

export default function Transactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const { transactions, count, isPending, error } =
    useTransactions(currentPage);
  const { deleteTransactions } = useDeleteTransactions();

  const pageCount = Math.ceil(count / postsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

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

      {transactions?.length > 0 && (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center justify-center gap-2 my-8"}
          pageLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-300 transition-colors cursor-pointer"
          }
          activeLinkClassName={
            "px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded-md"
          }
          previousLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          }
          nextLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          disabledLinkClassName={"opacity-50 cursor-not-allowed"}
          breakLinkClassName={"px-4 py-2"}
        />
      )}
    </div>
  );
}
