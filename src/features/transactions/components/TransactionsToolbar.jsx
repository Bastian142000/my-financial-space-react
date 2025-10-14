import AddTransactionModal from "./AddTransactionModal";
import CustomModal from "../../../ui/CustomModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TransactionsToolbar({ selectedCount, onDelete }) {
  return (
    <div className="mx-auto flex w-fit items-center justify-end pt-5 lg:w-11/12">
      <AddTransactionModal />

      {selectedCount > 1 && (
        <CustomModal
          title="Delete all selected transactions?"
          modalBorderColor="border-none"
          btnText={<DeleteForeverIcon fontSize="large" />}
          btnBorderColor="border-none"
          btnHoverTextColor="hover:text-red-500"
          btnTextColor="text-black"
          onClick={onDelete}
        />
      )}
    </div>
  );
}
