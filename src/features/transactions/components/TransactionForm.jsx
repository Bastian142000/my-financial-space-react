import SpinnerMini from "../../../ui/SpinnerMini";
import { validateNumber } from "../../../utils/validateInputNumber";

export default function TransactionForm({
  categories,
  isPending,
  error,
  description,
  categoryId,
  type,
  amount,
  setDescription,
  setCategoryId,
  setType,
  setAmount,
  onSubmit,
  children,
}) {
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategoryId(Number(e.target.value));
  const handleTypeChange = (e) => setType(e.target.value);
  const handleAmountChange = (e) => {
    validateNumber(e, setAmount);
  };
  return (
    <form onSubmit={onSubmit} className="pt-10">
      <div className="flex flex-col items-center gap-5">
        {/* Input Description */}
        <label htmlFor="description" className="w-68">
          Description
        </label>
        <input
          name="description"
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          maxLength={50}
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-purple-100"
        ></input>

        {/* Form group */}
        <div className="inline-flex gap-5">
          {/* Input Category */}
          <div className="flex flex-col gap-5">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={categoryId}
              onChange={handleCategoryChange}
              className="w-32 rounded-xl border border-gray-200 p-2"
            >
              {isPending && <SpinnerMini />}
              {error && <span className="text-red-500">{error}</span>}
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
              name="type"
              id="type"
              value={type}
              onChange={handleTypeChange}
              className="w-32 rounded-xl border border-gray-200 p-2"
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
          name="amount"
          id="amount"
          type="text"
          pattern="^\$?((\d{1,3}(,\d{3})*)|(\d+))(\.\d{2})?$"
          autoComplete="off"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-purple-100"
        ></input>
      </div>

      {/* Content */}
      <div className="mt-4 flex justify-center gap-5">{children}</div>
    </form>
  );
}
