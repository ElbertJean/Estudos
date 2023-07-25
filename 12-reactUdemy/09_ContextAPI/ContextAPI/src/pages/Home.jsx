// import React, {useContext} from 'react'
// import {CounterContext} from '../context/CounterContext';
import ChangeCounter from '../context/ChangeCounter';

// 4 - refatorando um hook
import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
  
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();

  return (
    <div>
      <h2>Home</h2>
      <p>{counter}</p>
      {/* 3 - alterando valor com contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home
