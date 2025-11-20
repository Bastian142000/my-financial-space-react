import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import useStatistics from "../hooks/useStatistics";
import LoaderSpinner from "../../../ui/LoaderSpinner/LoaderSpinner";
import FinancesLineChart from "./FinancesLineChart";
import ExpensesByCategory from "./ExpensesByCategory";
import useAllTransactions from "../hooks/useAllTransactions";
import toast from "react-hot-toast";

export default function Statistics() {
  const { data, isPending, error } = useStatistics();
  const balance = data?.income - data?.expense;

  const {
    transactions,
    isPending: isLoading,
    error: isError,
  } = useAllTransactions();

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <LoaderSpinner size="lg" />
      </div>
    );
  if (isError) toast.error(isError);

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {isPending && <LoaderSpinner size="sm" />}
      {error && <span>{error.message}</span>}
      {data && (
        <div className="flex flex-wrap justify-center gap-5">
          <Income income={data?.income} />
          <Expense expense={data?.expense} />
          <Balance balance={balance} />
        </div>
      )}

      <div className="h-full w-full rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-lg backdrop-blur-sm lg:h-150 lg:w-170">
        <FinancesLineChart transactions={transactions} />
      </div>

      <div className="h-full w-full rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-lg backdrop-blur-sm lg:h-150 lg:w-170">
        <ExpensesByCategory transactions={transactions} />
      </div>
    </div>
  );
}
