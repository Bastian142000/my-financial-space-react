export default function TransactionForm({
  description,
  category,
  type,
  amount,
  categories,
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
        {/* Input Description */}
        <label htmlFor="description" className="w-68">
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

        {/* Form group */}
        <div className="inline-flex gap-5">
          {/* Input Category */}
          <div className="flex flex-col gap-5">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="w-32 rounded-xl border border-gray-200 p-2"
              value={category}
              onChange={onCategoryChange}
            >
              {categories &&
                categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.category_name}
                  </option>
                ))}
            </select>
          </div>

          {/* Input Type */}
          <div className="flex flex-col gap-5">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              className="w-32 rounded-xl border border-gray-200 p-2"
              value={type}
              onChange={onTypeChange}
            >
              <option value={"INCOME"}>INCOME</option>
              <option value={"EXPENSE"}>EXPENSE</option>
            </select>
          </div>
        </div>

        {/* Input Amount */}
        <label htmlFor="amount" className="w-68">
          Amount
        </label>
        <input
          id="amount"
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-purple-100"
          type="text"
          pattern="(?:0|[1-9]\d*)"
          inputMode="decimal"
          autoComplete="off"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        ></input>
      </div>

      {/* Content */}
      <div className="mt-4 flex justify-center gap-5">{children}</div>
    </form>
  );
}
