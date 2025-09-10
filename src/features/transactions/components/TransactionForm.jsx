export default function TransactionForm({
  description,
  category,
  type,
  amount,
  onDescriptionChange,
  onCategoryChange,
  onTypeChange,
  onAmountChange,
  onSubmit,
  children,
}) {
  return (
    <form onSubmit={onSubmit} className="pt-10">
      <div className="flex flex-col items-center gap-5">
        <label for="description" className="w-68">
          Description
        </label>
        <input
          id="description"
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-purple-100"
          type="text"
          placeholder="Description"
          value={description}
          onChange={onDescriptionChange}
          maxLength={50}
        ></input>

        <div className="inline-flex gap-5">
          <div className="flex flex-col gap-5">
            <label for="category">Category</label>
            <select
              id="category"
              className="w-32 rounded-xl border border-gray-200 p-2"
              value={category}
              onChange={onCategoryChange}
            >
              <option>WA</option>
            </select>
          </div>

          <div className="flex flex-col gap-5">
            <label for="type">Type</label>
            <select
              id="type"
              className="w-32 rounded-xl border border-gray-200 p-2"
              value={type}
              onChange={onTypeChange}
            >
              <option>INCOME</option>
              <option>EXPENSE</option>
            </select>
          </div>
        </div>

        <label for="amount" className="w-68">
          Amount
        </label>
        <input
          id="amount"
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-purple-100"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
          min={0}
          max={999999999}
          step={1}
        ></input>
      </div>

      <div className="mt-4 flex justify-center gap-5">{children}</div>
    </form>
  );
}
