export default function CategoryForm({ category, setCategory, placeholder }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        name="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        maxLength={15}
        placeholder={placeholder}
        className="w-32 rounded-xl border border-gray-400 p-2"
      />
    </form>
  );
}
