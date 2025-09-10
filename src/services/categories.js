import api from "./apiConfig";

export async function fetchCategories() {
  try {
    const res = await api.get("/categories");
    return { status: res.status, data: res.data, error: null };
  } catch (error) {
    return { status: error.response?.status, error: error.message };
  }
}
