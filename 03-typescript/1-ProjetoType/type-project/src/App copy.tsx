import React, {useEffect, useState} from 'react';

const App = () => {
  
  type Pessoa = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

  const carros: string[] = ['bmw', 'chevette', 'nissan', 'ferrari'];
  const numeros: Array<number> = [1, 2, 3, 4, 5, 6];
  const valores: Array<number | string | boolean> = [true, false, 1, 2, 3, 4, 'Elbert', 'Jean']

  const [teste, setTeste] = useState<Pessoa>();

  useEffect(() => {
      async function fetchData() {
          try{
              const rest = await fetch('https://jsonplaceholder.typicode.com/todos/1')
              const data = await rest.json();
              setTeste(data);
          }
          catch (error) {
              console.log(error)
          }
        }
      fetchData();
  },[])

  return(
    <>
      <h1>Aooooooba</h1>
      <p>{teste?.title}</p>
      <p>{carros}</p>
      <p>{numeros}</p>
      <p>{valores}</p>
    </>
    )
 }

export default App;



