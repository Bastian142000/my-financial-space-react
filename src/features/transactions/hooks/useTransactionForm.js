import { useState } from "react";

export default function useTransactionForm(initial = {}) {
  const [description, setDescription] = useState(initial.description || "");
  const [type, setType] = useState(initial.type || "INCOME");
  const [amount, setAmount] = useState(initial.amount || 0);
  const [categoryId, setCategoryId] = useState(initial.categoryId || 1);

  return {
    description,
    setDescription,
    type,
    setType,
    amount,
    setAmount,
    categoryId,
    setCategoryId,
    reset: () => {
      setDescription("");
      setType("INCOME");
      setAmount(0);
      setCategoryId(1);
    },
  };
}
