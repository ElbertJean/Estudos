// import React, {useContext} from 'react'
// import { CounterContext } from '../context/CounterContext';
import { useContext } from 'react';
import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';

const Products = () => {
  
  // const {counter, setCounter} = useContext(CounterContext);
  const {counter} = useCounterContext() 
  
  return (
    <div>
      <h2>Produtos</h2>
      <p>{counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Products;
