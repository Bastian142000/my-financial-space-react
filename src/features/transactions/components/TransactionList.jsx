import { TableBody, TableCell, TableRow } from "@mui/material";
import { useEffect, useReducer } from "react";
import { fetchTransactions } from "../_api/Transactions";
import Transaction from "./Transaction";

//Initial state for reducer function
const initialState = {
  transactions: [],
  error: null,
  isLoading: false,
};

//Action types
const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const GET_TRANSACTIONS = "GET_TRANSACTIONS";

//Action creators (To dispatch)
const fetchStart = () => ({ type: "FETCH_START" });

const fetchSuccess = () => ({ type: "FETCH_SUCCESS" });

const fetchError = (error) => ({ type: "FETCH_ERROR", payload: error });

const getTransactions = (transactions) => ({
  type: "GET_TRANSACTIONS",
  payload: transactions,
});

//Reducer function
function reducer(state, action) {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, isLoading: true, error: null };
    }
    case FETCH_SUCCESS: {
      return { ...state, isLoading: false, error: null };
    }
    case FETCH_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_TRANSACTIONS: {
      return { ...state, transactions: action.payload };
    }
  }
}

export default function TransactionList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { transactions, error, isLoading } = state;

  useEffect(() => {
    dispatch(fetchStart());

    const fetch = async () => {
      const { data, error } = await fetchTransactions();

      if (error) dispatch(fetchError());

      dispatch(fetchSuccess());
      dispatch(getTransactions(data.data));
      console.log(data.data);
    };

    fetch();
  }, []);
  return (
    <TableBody>
      {isLoading && (
        <TableRow>
          <TableCell colSpan={5}>Loading...</TableCell>
        </TableRow>
      )}

      {error && (
        <TableRow>
          <TableCell colSpan={5}>Error loading transactions</TableCell>
        </TableRow>
      )}

      {transactions &&
        transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <Transaction transaction={transaction} />
          </TableRow>
        ))}
    </TableBody>
  );
}
