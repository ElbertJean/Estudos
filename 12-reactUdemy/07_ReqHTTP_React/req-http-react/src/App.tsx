import React, {useEffect, useState} from 'react';

const App = () => {
  
  const [teste, setTeste] = useState<any[]>([]);

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

  console.log(teste);
  
  return(
    <>
      <h1>Aooooooba</h1>

      <ol>
        {teste.map((item, key) => (
          <React.Fragment key={key}>
            <li>{item.title}</li>
            <li>{item.completed}</li>
          </React.Fragment>
        ))}
      </ol>

    </>
    )
 }

export default App;