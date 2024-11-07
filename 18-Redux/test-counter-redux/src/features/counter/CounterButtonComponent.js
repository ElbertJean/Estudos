import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';
import styles from './CounterButtonComponent.module.css';

const CounterButtonComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Aumentar o valor
      </button>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        Diminuir o valor
      </button>
    </div>
  );
};

export default CounterButtonComponent;
