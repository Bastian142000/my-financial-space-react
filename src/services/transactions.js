import supabase from "./supabase";

export async function fetchTransactions() {
  const { data, error } = await supabase
    .from("Transaction")
    .select(
      `id,description, type, amount, date, category_id, Category (category_name)`,
    );

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return data;
}
