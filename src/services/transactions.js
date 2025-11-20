import supabase from "./supabase";

export async function fetchTransactions({ user_id, page }) {
  const itemsPerPage = 5;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  const { data, count, error } = await supabase
    .from("Transaction")
    .select(
      `id, description, type, amount, date, category_id, Category (category_name)`,
      { count: "exact" },
    )
    .eq("user_id", user_id)
    .range(from, to)
    .order("date", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return { data, count };
}

export async function fetchAllTransactions({ user_id }) {
  const { data, error } = await supabase
    .from("Transaction")
    .select(
      `id, description, type, amount, date, category_id, Category (category_name)`,
    )
    .eq("user_id", user_id)
    .order("date", { ascending: false });

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

export async function updateTransaction({
  id,
  amount,
  type,
  description,
  category_id,
}) {
  const { data, error } = await supabase
    .from("Transaction")
    .update({ amount, type, description, category_id })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be updated");
  }

  return data;
}
