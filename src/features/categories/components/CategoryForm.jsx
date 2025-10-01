export default function CategoryForm({ category, setCategory }) {
  return (
    <form>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
    </form>
  );
}
