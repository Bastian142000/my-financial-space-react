import { createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction } from "./TransactionThunks";

const initialState = {
  transactions: [],
  status: "idle",
  error: null,
};

const TransactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    loadTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTransaction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.status = "success";
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.status = "success";
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.payload,
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { loadTransactions } = TransactionsSlice.actions;
export default TransactionsSlice.reducer;
