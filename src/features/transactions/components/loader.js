import { fetchTransactions } from "../../../services/transactions";

export async function transactionsLoader() {
  return await fetchTransactions();
}
