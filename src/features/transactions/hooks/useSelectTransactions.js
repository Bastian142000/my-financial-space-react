import { useCallback, useState } from "react";

export default function useSelectTransactions(items = []) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = useCallback((itemId) => {
    setSelectedIds((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedIds((prev) =>
      prev.length === items.length ? [] : items.map((item) => item.id),
    );
  }, [items]);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const isAllSelected = selectedIds.length === items.length && items.length > 0;
  const isIndeterminate =
    selectedIds.length > 0 && selectedIds.length < items.length;

  return {
    selectedIds,
    handleSelect,
    handleSelectAll,
    clearSelection,
    isAllSelected,
    isIndeterminate,
  };
}
