function BaseLayout({ title, subtitle, children }) {
  return (
    <div className="mx-auto overflow-y-auto flex w-11/12 flex-col lg:mt-5 lg:rounded-xl lg:border lg:border-gray-300 lg:shadow-xl">
      <div className="m-7 flex w-11/12 flex-col items-center gap-3 px-5 text-2xl lg:items-start">
        <h1 className="font-semibold">{title}</h1>
        <h2 className="text-base text-gray-600">{subtitle}</h2>
      </div>
      <div className="flex h-10/12 justify-center p-5">{children}</div>
    </div>
  );
}

export default BaseLayout;
