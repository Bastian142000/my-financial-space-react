import InputText from "../../../ui/InputText/InputText";

export default function CategoryForm({ category, setCategory, placeholder }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputText
        label={"Category"}
        name="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        maxLength={15}
        placeholder={placeholder}
        required
      />
    </form>
  );
}
