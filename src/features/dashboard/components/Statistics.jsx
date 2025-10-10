import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import useStatistics from "../hooks/useStatistics";
import SpinnerMini from "../../../ui/SpinnerMini";
import FinancesLineChart from "./FinancesLineChart";
import ExpensesByCategory from "./ExpensesByCategory";
import useTransactions from "../../transactions/hooks/useTransactions";

export default function Statistics() {
  const { data, isPending, error } = useStatistics();
  const balance = data?.income - data?.expense;

  const { transactions } = useTransactions();
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

        <div className="flex w-10/12 flex-wrap justify-around gap-18">
          <div className="h-[500px] w-full rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm lg:w-6/12">
            <FinancesLineChart transactions={transactions} />
          </div>

          <div className="h-[500px] w-full rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm lg:w-5/12">
            <ExpensesByCategory transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
