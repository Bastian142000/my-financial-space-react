export default function Button({
  width,
  children,
  borderColor,
  textColor,
  hoverTextColor,
  hoverBgColor,
}) {
  return (
    <button
      className={`cursor-pointer rounded-xl border ${borderColor} p-2 font-semibold ${textColor} uppercase transition duration-300 ease-in-out ${hoverBgColor} ${hoverTextColor} ${width} `}
    >
      {children}
    </button>
  );
}
