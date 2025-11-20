import { useCallback, useState } from "react";
import TransactionTable from "../features/transactions/components/TransactionTable";
import TransactionList from "../features/transactions/components/TransactionList";
import useDeleteTransactions from "../features/transactions/hooks/useDeleteTransactions";
import useTransactions from "../features/transactions/hooks/useTransactions";
import useSelectTransactions from "../features/transactions/hooks/useSelectTransactions";
import TransactionsToolbar from "../features/transactions/components/TransactionsToolbar";
import ReactPaginate from "react-paginate";
import BaseLayout from "../ui/BaseLayout/BaseLayout";

const postsPerPage = 5;

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
    <BaseLayout
      title={"Add new transactions"}
      subtitle={"Here you can register your transactions"}
    >
      <div className="mx-auto flex h-full w-12/12 flex-col overflow-y-auto rounded-2xl border border-gray-300">
        <div className="flex flex-col items-center justify-end gap-1 border-b border-gray-300 p-5 lg:flex-row lg:items-end lg:gap-5">
          <TransactionsToolbar
            selectedCount={selectedIds.length}
            onDelete={handleDelete}
          />
        </div>
        <div className="mx-auto mt-5 w-12/12">
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
      </div>
    </BaseLayout>
  );
}
