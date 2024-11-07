import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/CounterSlice";

import styles from './CounterButtonScreen.module.css';
import Nav from "../components/Nav";

const CounterButton = () => {
  
  const dispatch = useDispatch();

  return(
    <div className={styles.container}>
      <Nav />
      <button 
        className={styles.button} 
        onClick={() => dispatch(increment())}
      >
        Aumentar o valor
      </button>
      <button 
        className={styles.button} 
        onClick={() => dispatch(decrement())}
      >
        Diminuir o valor
      </button>
    </div>
  )
}

export default CounterButton;