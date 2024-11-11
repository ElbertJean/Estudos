import React, {useContext} from "react";

import { CounterContext } from "../Context/Counter/CounterContext";

import styles from './CounterValueScreen.module.css';
import Nav from "../Components/Nav";

const CounterValueComponent = () => {
  
  const { count } = useContext(CounterContext);
  
  return (
    <div className={styles.container}>
      <Nav />
      <h1 className={styles.title}>Contador: {count}</h1>
    </div>
  )
};

export default CounterValueComponent;