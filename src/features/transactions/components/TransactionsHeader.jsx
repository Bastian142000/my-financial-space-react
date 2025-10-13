export default function TransactionsHeader() {
  return (
    <div className="flex h-full w-12/12 flex-col gap-3 overflow-auto p-5 text-2xl lg:m-7 lg:h-20 lg:p-0 lg:px-7">
      <h1 className="text-md font-semibold">Add new transactions</h1>
      <h2 className="text-base text-gray-600">
        Here you can register a new transaction on the current month
      </h2>
    </div>
  );
}
