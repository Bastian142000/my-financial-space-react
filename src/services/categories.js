import supabase from "./supabase";

export async function fetchCategories() {
  const { data, error } = await supabase.from("Category").select("*");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return data;
}

export async function addCategory({ category }) {
  const { data, error } = await supabase
    .from("Category")
    .insert([{ category_name: category }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Category could not be added");
  }

  return data;
}

export async function deleteCategory({ id }) {
  const { error } = await supabase.from("Category").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Category could not be deleted");
  }
}

export async function updateCategory({ id, category }) {
  const { data, error } = await supabase
    .from("Category")
    .update({ category_name: category })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Category could not be updated");
  }

  return data;
}
