import AddTransactionModal from "./AddTransactionModal";
import CustomModal from "../../../ui/CustomModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TransactionsToolbar({ selectedCount, onDelete }) {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <AddTransactionModal />

      {selectedCount > 1 && (
        <CustomModal
          title="Delete all selected transactions?"
          btnIcon={<DeleteForeverIcon fontSize="large" />}
          btnVariant={"danger"}
          modalBorderColor="border-none"
          onClick={onDelete}
        />
      )}
    </div>
  );
}
