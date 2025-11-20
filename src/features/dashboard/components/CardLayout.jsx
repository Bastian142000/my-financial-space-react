function CardLayout({ children }) {
  return (
    <div className="mt-5 w-full lg:w-md flex h-52 items-center gap-5 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-sm">
      {children}
    </div>
  );
}

export default CardLayout;
