// 3 - alterando os componentes 
import React, {useContext} from 'react'
import { CounterContext } from '../context/CounterContext';

const ChangeCounter = () => {
  
    const {counter, setCounter} = useContext(CounterContext);
  
    return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
      <button onClick={() => setCounter(counter + 1)}>Adicionar valor ao contador</button>
      <button onClick={() => setCounter(0)}>Zerar contador</button>
    </div>
  )
}

export default ChangeCounter
