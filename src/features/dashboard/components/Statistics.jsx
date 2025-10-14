import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import useStatistics from "../hooks/useStatistics";
import SpinnerMini from "../../../ui/SpinnerMini";
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

  if (isLoading) return <SpinnerMini />;
  if (isError) toast.error(isError);

  return (
    <div>
      <div className="flex h-60 flex-wrap items-center justify-center gap-5">
        {isPending && <SpinnerMini />}
        {error && <span>{error.message}</span>}
        {data && (
          <div className="flex flex-wrap justify-center gap-5">
            <Income income={data?.income} />
            <Expense expense={data?.expense} />
            <Balance balance={balance} />
          </div>
        )}

        <div className="flex w-11/12 flex-col items-center gap-8 lg:w-10/12 lg:flex-row lg:justify-around">
          <div className="h-[400px] w-full rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-lg backdrop-blur-sm sm:h-[450px] sm:p-6 md:h-[500px] md:w-10/12 md:p-8 lg:h-[580px] lg:w-6/12">
            <FinancesLineChart transactions={transactions} />
          </div>

          <div className="h-[400px] w-full rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-lg backdrop-blur-sm sm:h-[450px] sm:p-6 md:h-[500px] md:w-10/12 md:p-8 lg:h-[580px] lg:w-5/12">
            <ExpensesByCategory transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
