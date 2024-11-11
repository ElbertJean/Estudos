import React, {useContext} from 'react';
import { CounterContext } from '../Context/Counter/CounterContext';

import win from '../assets/win.jpeg';
import lose from '../assets/lose.png';

import styles from './CounterMemeComponent.module.css';

const CounterMeme = () => {
  
  const { count } = useContext(CounterContext);

  return (
    <>
      <div className={styles.imageRight} >
        {count >= 3 && <img width="300px" src={win} alt="win"/>}
        {count <= -3 && <img width="300px" src={lose} alt="lose"/>}
      </div>
      <div className={styles.imageLeft}>
        {count >= 3 && <img width="300px" src={win} alt="win"/>}
        {count <= -3 && <img width="300px" src={lose} alt="lose"/>}
      </div>
    </>
  )
}

export default CounterMeme;