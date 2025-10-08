export const validateNumber = (e, setState) => {
  let value = e.target.value;

  value = value.replace(",", ".");

  if (/^\d*\.?\d*$/.test(value)) {
    const num = Number(value);

    if (!isNaN(num) && num >= 0 && num <= 999999999) {
      setState(value);
    } else {
      setState(value);
    }
  }
};
