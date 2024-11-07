import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/AuthSlice';

const Nav = () => {

  const dispatch = useDispatch();

  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/">Início</Link>
      <Link className={styles.navLink} to="/counter-value">Valor</Link>
      <Link className={styles.navLink} to="/counter-button">Botão</Link>
      <Link className={styles.logout} to="#" onClick={() => dispatch(logout())}>Sair</Link>
    </nav>
  );
};

export default Nav;
