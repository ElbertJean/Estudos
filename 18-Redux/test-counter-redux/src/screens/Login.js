import React, { useState } from "react";

import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/AuthSlice";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleLogin() {
    if (email === "elbertjean@gmail.com" && password === "12345678") {
      dispatch(login());
      navigate("/home");
    } else {
      alert("Email ou senha inválidos");
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.divTitle}>
        <h1 className={styles.title}>Projeto Redux</h1>
        <div>
          <p className={styles.text}>Faça o login com as credenciais abaixo:</p>
          <p className={styles.text}>e-mail: elbertjean@gmail.com | senha: 12345678</p>
        </div>
      </div>
      <div className={styles.divForm}>
        <div className={styles.content}>
          <h2 className={styles.subTitle}>Realizar login</h2>
          <div className={styles.form}>
            <input 
              className={styles.input} 
              type="text" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              className={styles.input} 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              className={styles.button}
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;