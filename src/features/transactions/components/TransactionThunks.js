import api from "../../../services/apiConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/transactions/${id}`);
      return id;
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
