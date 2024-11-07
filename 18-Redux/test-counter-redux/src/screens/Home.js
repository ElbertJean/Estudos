import React from 'react';
import CounterValueComponent from '../features/counter/CounterValueComponent';
import CounterButtonComponent from '../features/counter/CounterButtonComponent';
import Nav from '../components/Nav';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <CounterValueComponent />
      <CounterButtonComponent />
    </div>
  );
};

export default Home;
