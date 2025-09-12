import authReducer from "./features/auth/components/AuthSlice";
import transactionsReducer from "./features/transactions/components/TransactionsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
  },
});
