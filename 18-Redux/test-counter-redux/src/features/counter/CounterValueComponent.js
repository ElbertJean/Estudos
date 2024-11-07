import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CounterValueComponent.module.css';

const CounterValueComponent = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador: {count}</h1>
    </div>
  );
};

export default CounterValueComponent;
