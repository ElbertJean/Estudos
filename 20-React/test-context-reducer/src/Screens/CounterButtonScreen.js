import React, { useContext } from "react";
import { CounterContext } from "../Context/Counter/CounterContext"

import styles from './CounterButtonScreen.module.css';
import Nav from "../Components/Nav";

const CounterButton = () => {
  
  const { dispatch } = useContext(CounterContext);

  return(
    <div className={styles.container}>
      <Nav />
      <button 
        className={styles.button} 
        onClick={() => dispatch({type: 'INCREMENT'})}
      >
        Aumentar o valor
      </button>
      <button 
        className={styles.button} 
        onClick={() => dispatch({type: 'DECREMENT'})}
      >
        Diminuir o valor
      </button>
    </div>
  )
}

export default CounterButton;