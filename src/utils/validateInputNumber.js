export const validateNumber = (e, setState) => {
  let value = e.target.value;
  if (/^\d*$/.test(value)) {
    if (value === "" || (Number(value) >= 1 && Number(value) <= 999999999)) {
      setState(Number(e.target.value));
    }
  }
};
