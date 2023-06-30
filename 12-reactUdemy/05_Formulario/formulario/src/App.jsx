import React from 'react'
import './App.css';
import MyForm from './components/01_MyForm';

function App() {

  return (
    <>
      <h1>Formulário</h1>
      <MyForm user={{name: "Elbert", email:"elbertjean@gmail.com"}}/>
    </>
  )
}

export default App
