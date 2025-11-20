import { baseStyles, sizes } from "./Input.styles";

function InputText({
  inputSize = "md",
  fullWidth = false,
  className = "",
  disabled,
  label,
  required,
  error,
  id,
  ...rest
}) {
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <div className={`flex flex-col ${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type="text"
        className={`${baseStyles} ${sizes[inputSize]} ${widthClass} ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        } ${className || ""}`}
        disabled={disabled}
        aria-required={required}
        aria-invalid={!!error}
        {...rest}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
}

export default InputText;
