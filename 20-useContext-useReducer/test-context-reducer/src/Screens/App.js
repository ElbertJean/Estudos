import React from 'react';
import CounterValue from '../Components/CounterValueComponent';
import CounterButton from '../Components/CounterButtonComponent';
import CounterMeme from '../Components/CounterMemeComponent';

import styles from './App.module.css';
import Nav from '../Components/Nav';

const App = () => {

  return(
    <div className={styles.container}>
      <Nav />
      <CounterValue />
      <CounterButton />
      <CounterMeme />
    </div>
  )
}

export default App;
