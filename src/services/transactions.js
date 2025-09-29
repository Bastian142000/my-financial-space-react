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

export async function addTransaction({
  amount,
  type,
  description,
  category_id,
  user_id,
}) {
  const { data, error } = await supabase
    .from("Transaction")
    .insert([
      {
        amount: amount,
        type: type,
        description: description,
        category_id: category_id,
        user_id: user_id,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be added");
  }

  return data;
}

export async function deleteTransactions({ ids }) {
  const { data, error } = await supabase
    .from("Transaction")
    .delete()
    .in("id", ids);

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be deleted");
  }

  return data;
}
