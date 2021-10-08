import React from 'react';
import styles from '../styles/CurrencyRow.module.scss';

export default function CurrencyRow(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount } = props;
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select className={styles.selectCss} value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
