/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { binaryStringToDecimalNumber } from '../../utils/convertBinaryToDecimal';
import { verifyInputNumber } from '../../utils/verifyInputNumber';
import styles from './conversor.module.scss';

export const Converter = () => {
  const [binaryNumber, setBinaryNumber] = useState<string>('');
  const [decimalNumber, setDecimalNumber] = useState<any>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const decimalNumber = binaryStringToDecimalNumber(binaryNumber);
    setDecimalNumber(decimalNumber);
  };

  const handleChange = (e: any) => {
    verifyInputNumber(e.target.value) && setBinaryNumber(e.target.value);
  };
  return (
    <div className={styles['main-container']}>
      <div className={styles.background}>
        <i className="fa-solid fa-sort-down" />
      </div>
      <h1>
        BIN-<span>TO</span>-LOVE
      </h1>
      <form className={styles.form}>
        <input
          type="text"
          className={styles['binary-number']}
          placeholder="BINARY NUMBER"
          maxLength={8}
          onChange={handleChange}
          value={binaryNumber}
        />

        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Convert
          <i className="fa-solid fa-arrows-rotate" />
        </button>
      </form>

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
