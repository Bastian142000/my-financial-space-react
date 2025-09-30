import Button from "../ui/Button";
import CategoryList from "../features/categories/CategoriesList";

export default function Categories() {
  return (
    <div className="mx-auto mt-5 flex h-11/12 w-11/12 max-w-screen flex-col items-center overflow-x-auto rounded-xl border border-gray-300 shadow-sm lg:h-11/12 lg:w-11/12 lg:overflow-x-hidden">
      {/* Title and Subtitle */}
      <div className="m-7 flex w-12/12 flex-col gap-3 overflow-auto px-7 text-2xl">
        <h1 className="font-semibold">Add new categories</h1>
        <h2 className="text-base text-gray-600">
          Here you can register custom categories
        </h2>
      </div>

      {/* Content */}
      <div className="flex h-10/12 max-h-10/12 w-8/12 flex-col overflow-y-auto rounded-2xl border border-gray-300">
        <div className="flex h-25 items-center justify-center gap-5 border-b border-gray-300">
          <input
            type="text"
            placeholder="Category name..."
            className="h-6/12 w-6/12 rounded-xl border border-gray-400 p-3"
          />
          <Button
            height={"h-12"}
            width={"w-fit"}
            borderColor={"border-green-400"}
            textColor={"text-green-600"}
            hoverBgColor={"hover:bg-green-400"}
            hoverTextColor={"hover:text-white"}
          >
            Add
          </Button>
        </div>
        <div className="mx-auto mt-5 max-h-190 w-10/12 overflow-y-auto">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
