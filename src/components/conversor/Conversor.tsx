/* eslint-disable no-restricted-properties */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import styles from './conversor.module.scss';

export const Converter = () => {
  const [binaryNumber, setBinaryNumber] = useState<any>('');
  const [decimalNumber, setDecimalNumber] = useState<any>('');

  const convertBinaryNumber = () => {
    const binaryArray = Array.from(binaryNumber);
    const binaryNumberArray = [];
    let sum = 0;

    for (let i = 0; i < binaryArray.length; i++) {
      binaryNumberArray.push(parseInt(binaryArray[i]));
    }

    for (let j = binaryNumberArray.length - 1; j >= 0; j--) {
      sum += binaryNumberArray[j] * Math.pow(2, j);
    }

    setDecimalNumber(sum);
  };

  const verifyInputNumber = (value: string) => {
    const splittedNumbers = value.split('');

    let isValid = true;

    splittedNumbers.forEach((element: any) => {
      if (Number(element) !== 0 && Number(element) !== 1) {
        isValid = false;
      }
    });

    console.log(isValid);
    return isValid;
  };

  return (
    <div className={styles['main-container']}>
        <div className={styles.background}>
        <i className="fa-solid fa-sort-down" />
      </div >
      <h1>
        BIN - <span>EXCHANGE</span>
      </h1>
      
      <input
        type="text"
        className={styles['binary-number']}
        placeholder="BINARY NUMBER"
        maxLength={8}
        onChange={(e) => {
          verifyInputNumber(e.target.value) && setBinaryNumber(e.target.value);
        }}
        value={binaryNumber}
      />

      <button className={styles.button} type="button" onClick={convertBinaryNumber}>
        Convert
        <i className="fa-solid fa-arrows-rotate" />

      </button>
     
      <input
        type="text"
        className={styles['decimal-number']}
        placeholder="DECIMAL NUMBER"
        value={decimalNumber}
      />
    </div>
  );
};

export default Converter;
