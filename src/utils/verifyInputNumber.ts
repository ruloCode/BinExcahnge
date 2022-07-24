export const verifyInputNumber = (value: string) => {
  // get array from string
  const splittedNumbers = value.split('');

  let isValid = true;

  splittedNumbers.forEach((element: any) => {
    // check if the number is binary
    if (Number(element) !== 0 && Number(element) !== 1) {
      isValid = false;
    }
  });

  return isValid;
};

export default verifyInputNumber;
