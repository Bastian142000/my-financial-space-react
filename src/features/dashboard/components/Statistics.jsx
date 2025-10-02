import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import useStatistics from "../hooks/useStatistics";
import SpinnerMini from "../../../ui/SpinnerMini";

export default function Statistics() {
  const { data, isPending, error } = useStatistics();
  const balance = data.income - data.expense;
  return (
    <div className="flex h-60 flex-wrap items-center justify-center gap-5 overflow-auto">
      {isPending && <SpinnerMini />}
      {error && <span>{error.message}</span>}
      {data && (
        <>
          <Income income={data.income} />
          <Expense expense={data.expense} />
          <Balance balance={balance} />
        </>
      )}
    </div>
  );
}
