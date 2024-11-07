import React from "react";

import { useSelector } from "react-redux";

import styles from './CounterValueScreen.module.css';
import Nav from "../components/Nav";

const CounterValueComponent = () => {
  
  const count = useSelector((state) => state.counter.value);
  
  return (
    <div className={styles.container}>
      <Nav />
      <h1 className={styles.title}>Contador: {count}</h1>
    </div>
  )
};

export default CounterValueComponent;