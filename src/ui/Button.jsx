export default function Button({
  width,
  children,
  borderColor,
  textColor,
  hoverTextColor,
  hoverBgColor,
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-2xl border ${borderColor} p-2 text-lg font-semibold transition duration-300 ease-in-out ${width} ${disabled ? "cursor-not-allowed opacity-50" : `cursor-pointer ${textColor} ${hoverBgColor} ${hoverTextColor}`} `}
    >
      {children}
    </button>
  );
}
