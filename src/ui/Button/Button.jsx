import { baseStyles, variants, sizes } from "./Button.styles";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

function Button({
  label,
  icon,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  className = "",
  disabled,
  spinnerVariant = "secondary",
  ...rest
}) {
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className || ""}}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <LoaderSpinner variant={spinnerVariant} />
      ) : (
        <>
          {icon && <span className="flex items-center">{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
}

export default Button;
