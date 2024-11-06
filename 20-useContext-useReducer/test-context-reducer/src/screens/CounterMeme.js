import React, {useContext} from 'react';
import { CounterContext } from '../Context/Counter/CounterContext';

import win from '../assets/win.jpeg';
import lose from '../assets/lose.jpeg';

const CounterMeme = () => {
  
  const { count } = useContext(CounterContext);

  return (
    <div>
      {count >= 3 && <img width="300px" src={win} alt="win"/>}
      {count <= -3 && <img width="250px" src={lose} alt="lose"/>}
    </div>
  )
}

export default CounterMeme;