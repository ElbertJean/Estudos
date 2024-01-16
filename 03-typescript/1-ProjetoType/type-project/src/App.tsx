import React from 'react';

import './App.css';

function App(): JSX.Element {
  
  type Pessoa = {
    nome: string;
    idade: number;
    ocupacao: string;
  }

  const listaFrutas: [string, ...string[]] = ['maçã', 'banana', 'pêra', 'goiaba', 'laranja']
  console.log(...listaFrutas);

  function listaDados(nomes: string[], idade: number[]) {
    console.log([...nomes, ...idade])
  }

  listaDados(['Elbert', 'Jean'], [27, 30])

  let pessoa: [string, string, number];
  pessoa = ['Elbert', 'front-end', 27];
  const teste: Pessoa[] = [
    {
      nome: 'Elbert',
      idade: 2,
      ocupacao: 'Administrador'
    },
    { 
      nome: 'Henrique',
      idade: 20,
      ocupacao: 'Diretor'
    }
  ]

  return(
    <div className='container'>
      <div className='card'>
        {pessoa.map((item, key) => (
          <div className='teste'>
            <h1 className='title' key={key}>{item}</h1>
          </div>
        ))}
        <div className='containerCardzin'>
          {teste.map((item, key) => (
            <div key={key} className='cardzin'>
              <p>{item.nome}</p>
              <p>{item.idade}</p>
              <p>{item.ocupacao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;


