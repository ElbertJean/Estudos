import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './Nav.module.css';

const Nav = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <button onClick={() => navigate('/')}><h1>Home</h1></button>
      <button onClick={() => navigate('/counter-value')}><h1>Contador</h1></button>
      <button onClick={() => navigate('/counter-button')}><h1>Botão</h1></button>
    </div>
  )
}

export default Nav;