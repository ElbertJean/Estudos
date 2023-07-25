// import React, {useContext} from 'react'
// import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../context/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';

const About = () => {

  // const {counter, setCounter} = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h2>Sobre</h2>
      <p>{counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default About