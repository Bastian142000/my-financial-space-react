import api from "../../../services/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({ description, category_id, type, amount, user_id }, thunkAPI) => {
    try {
      const res = await api.post("/transactions", {
        description,
        category_id,
        type,
        amount,
        user_id,
      });
      return res.data.transaction;
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data ??
        err.message ??
        "Unknown error";
      return thunkAPI.rejectWithValue(message);
    }
  },
);

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
      });
  },
});

export const { loadTransactions } = TransactionsSlice.actions;
export default TransactionsSlice.reducer;
