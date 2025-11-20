import { validateNumber } from "../../../utils/validateInputNumber";
import InputText from "../../../ui/InputText/InputText";
import SpinnerMini from "../../../ui/SpinnerMini";

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
    <form onSubmit={onSubmit} className="flex justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-5 lg:w-[60%]">
        {/* Input Description */}
        <InputText
          label={"Description"}
          name="description"
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          maxLength={50}
        />

        {/* Input Category */}
        <div className="flex w-full lg:w-[95%] flex-col">
          <label
            htmlFor="category"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            value={categoryId}
            onChange={handleCategoryChange}
            className="h-10 rounded-md border border-gray-400 px-4 text-base font-medium shadow-sm ring-blue-400 transition-colors duration-300 ease-linear focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
        <div className="flex w-full lg:w-[95%] flex-col">
          <label
            htmlFor="type"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleTypeChange}
            className="h-10 w-full rounded-md border border-gray-400 px-4 text-base font-medium shadow-sm ring-blue-400 transition-colors duration-300 ease-linear focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value={"INCOME"}>INCOME</option>
            <option value={"EXPENSE"}>EXPENSE</option>
          </select>
        </div>

        {/* Input Amount */}
        <InputText
          label={"Amount"}
          name="amount"
          id="amount"
          type="text"
          pattern="^\$?((\d{1,3}(,\d{3})*)|(\d+))(\.\d{2})?$"
          autoComplete="off"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex justify-center gap-5">{children}</div>
    </form>
  );
}
