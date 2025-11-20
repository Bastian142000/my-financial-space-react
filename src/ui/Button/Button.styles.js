const baseStyles =
  "cursor-pointer inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors ease-linear duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  outline:
    "border border-blue-400 bg-white hover:bg-blue-300 hover:text-white focus:ring-blue-500",
  outlineWarning:
    "border border-yellow-500 bg-white hover:bg-yellow-500 hover:text-white focus:ring-yellow-500",
  outlineDanger:
    "border border-red-400 bg-white hover:bg-red-500 hover:text-white focus:ring-red-500",
  warning: "bg-yellow-300 text-white hover:bg-yellow-50 focus:ring-blue-500",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

export { baseStyles, variants, sizes };