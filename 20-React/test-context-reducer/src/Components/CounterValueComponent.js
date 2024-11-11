import React, {useContext} from "react";

import { CounterContext } from "../Context/Counter/CounterContext";

import styles from './CounterValueComponent.module.css';

const CounterValueComponent = () => {
  
  const { count } = useContext(CounterContext);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador: {count}</h1>
    </div>
  )
};

export default CounterValueComponent;