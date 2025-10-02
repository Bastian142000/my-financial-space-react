export default function CategoryForm({ category, setCategory, placeholder }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        maxLength={15}
        placeholder={placeholder}
        className="rounded-xl border border-gray-400 p-2"
      />
    </form>
  );
}
