const sizes = {
  sm: "h-[18px] w-[18px]",
  lg: "h-[48px] w-[48px]",
};

const variants = {
  primary: "border-2 border-black",
  secondary: "border-2 border-white",
};

function LoaderSpinner({ size = "sm", variant = "primary" }) {
  return <span className={`${sizes[size]} ${variants[variant]} loader inline-block rounded-full border-b-transparent`}></span>;
}

export default LoaderSpinner;
