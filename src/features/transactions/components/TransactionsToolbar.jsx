import AddTransactionModal from "./AddTransactionModal";
import CustomModal from "../../../ui/CustomModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TransactionsToolbar({ selectedCount, onDelete }) {
  return (
    <div className="mx-auto flex w-fit gap-3 justify-end pt-5 lg:w-11/12">
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
