import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundScreen.module.css';

const NotFoundScreen = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Página não encontrada</h1>
            <Link className={styles.nav} to="/">Ir para Home</Link>
        </div>
    )
}

export default NotFoundScreen;