import TransactionList from "../components/TransactionList";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../../ui/Button";

export default function Transactions() {
  return (
    <div className="mt-5 flex h-11/12 max-w-screen flex-col overflow-x-auto rounded-xl border border-gray-300 shadow-sm lg:overflow-x-hidden">
      <div className="m-7 flex flex-col gap-3 px-7 text-2xl">
        <h1 className="font-semibold">Add new transactions</h1>
        <h2 className="text-base text-gray-600">
          Here you can register a new transaction on the current month
        </h2>
      </div>

      <div className="mx-auto flex w-11/12 justify-end">
        <Button
          width={"w-fit"}
          borderColor={"border-purple-300"}
          textColor={"text-purple-600"}
          hoverBgColor={"hover:bg-purple-300"}
          hoverTextColor={"hover:text-white"}
        >
          <AddIcon />
          Add transaction
        </Button>
      </div>

      <TableContainer className="mx-auto mt-3 flex max-w-11/12 cursor-pointer rounded-md border border-gray-100 shadow-sm">
        <Table>
          <TableHead className="bg-blue-chalk-100">
            <TableRow>
              <TableCell sx={{ fontSize: "16px" }}>Description</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Category</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Type</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Amount $</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Date</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TransactionList />
        </Table>
      </TableContainer>
    </div>
  );
}
