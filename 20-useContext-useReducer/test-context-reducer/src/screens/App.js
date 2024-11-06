import React from 'react';
import CounterValue from './CounterValue';
import CounterButton from './CounterButton';
import CounterProvider from '../Context/Counter/CounterProvider';
import CounterMeme from './CounterMeme';

import styles from './App.module.css';

const App = () => {

  return(
    <CounterProvider>
      <div className={styles.container}>
        <CounterValue />
        <CounterButton />
        <CounterMeme />
      </div>
    </CounterProvider>
  )
}

export default App;
