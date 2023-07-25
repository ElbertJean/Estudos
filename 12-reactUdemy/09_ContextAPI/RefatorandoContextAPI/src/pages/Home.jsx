// import React, {useContext} from 'react'
// import {CounterContext} from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

// 4 - refatorando um hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {

  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();

  // 5 - consumindo com o hook 
  const {color, dispatch} = useTitleColorContext();

  // 6 - Altarando state complexo 
  const setTitleColor = (color) => {
    dispatch ({type: color})
  }

  return (
    <div>
      <h2 style={{color: color}}>Home</h2>
      <p>{counter}</p>
      {/* 3 - alterando valor com contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo  */}
      <div>
        <button onClick={() => setTitleColor("YELLOW")}>Iélou</button>
        <button onClick={() => setTitleColor("BLUE")}>Blu</button>
      </div>
    </div>
  )
}

export default Home
