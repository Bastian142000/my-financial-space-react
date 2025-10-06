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
      <div className="flex h-60 flex-wrap items-center justify-center gap-5 overflow-auto">
        {isPending && <SpinnerMini />}
        {error && <span>{error.message}</span>}
        {data && (
          <>
            <Income income={data?.income} />
            <Expense expense={data?.expense} />
            <Balance balance={balance} />
          </>
        )}
      </div>
      <div className="mx-auto flex w-10/12 flex-wrap gap-20">
        <div className="mx-auto mt-5 w-6/12">
          <FinancesLineChart transactions={transactions} />
        </div>
        <div className="mx-auto mt-5 w-5/12">
          <ExpensesByCategory transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
