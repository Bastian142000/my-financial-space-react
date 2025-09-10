export default function Button({
  width,
  children,
  borderColor,
  textColor,
  hoverTextColor,
  hoverBgColor,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border ${borderColor} p-2 font-semibold ${textColor} text-lg transition duration-300 ease-in-out ${hoverBgColor} ${hoverTextColor} ${width} `}
    >
      {children}
    </button>
  );
}
