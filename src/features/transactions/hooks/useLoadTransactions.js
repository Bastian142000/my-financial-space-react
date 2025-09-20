import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTransactions } from "../components/TransactionsSlice";
import { fetchTransactions } from "../components/TransactionThunks";

export function useLoadTransactions() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTransactionsData = async () => {
      try {
        const data = await dispatch(fetchTransactions()).unwrap();
        dispatch(loadTransactions(data));
      } catch (e) {
        console.error(e);
      }
    };
    fetchTransactionsData();
  }, [dispatch]);
}
