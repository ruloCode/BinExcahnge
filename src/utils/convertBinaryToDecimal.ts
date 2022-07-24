/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-restricted-properties */


export const binaryStringToDecimalNumber = ( binaryNumber : string) => {
  // Array of binary numbers in string  ["1","0","0"]
  const binaryArray = Array.from(binaryNumber);

  // Start and empty binary array array [1,0,0]
  const binaryNumberArray = [];

  // Start decimal at 0
  let decimalNumber = 0;

  // Iterate over the array of binary numbers in string
  for (let value = 0; value < binaryArray.length; value++) {
    // Convert each string to int number and push to binaryNumberArray
    binaryNumberArray.push(parseInt(binaryArray[value]));
  }

  for (let value = binaryNumberArray.length - 1; value >= 0; value--) {
    //  returns each binary number x base exponent of binary value

    //  You use power of 10 with decimal
    //  so now it's power of 2
    decimalNumber += binaryNumberArray[value] * Math.pow(2, value);
  }

  return decimalNumber;
};

export default binaryStringToDecimalNumber;
