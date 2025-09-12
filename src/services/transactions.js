import api from "./apiConfig";

export async function fetchTransactions() {
  try {
    const res = await api.get("/transactions");
    return { status: res.status, data: res.data, error: null };
  } catch (error) {
    return { status: error.response?.status, error: error.message };
  }
}

export async function createTransaction(
  description,
  category_id,
  type,
  amount,
  user_id,
) {
  try {
    const res = await api.post("/transactions", {
      description,
      category_id,
      type,
      amount,
      user_id,
    });
    return { status: res.status, data: res.data, error: null };
  } catch (error) {
    return { status: error.response?.status, error: error.message };
  }
}
