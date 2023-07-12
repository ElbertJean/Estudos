import { useState, useEffect } from 'react';
import './App.css'

const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  // Aula 1 - Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)  //faz a chamada da requisição do endpoint
      const data = await res.json();  //transforma o res em objeto json
      setProducts(data);
    }

    fetchData();
  }, []);

  //2- Adicionar produtos

  const handleSubmit = async (e) => {
    e.preventDefault();   //cancela o reload automatico do form

    const product = {
      name,   //iguala ao valor do useState name
      price,  //iguala ao valor do useState price
    };

    const res = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    //3 - carregamento dinâmico
    const addedproduct = await res.json();
    
    setProducts((prevProducts) => [...prevProducts, addedproduct]);
    
    setName('');
    setPrice('');
  }

  return (
    <>
      <div style={{textAlign:'center'}}>
        <h1>Requisições HTTP com React</h1>
        <h2>Lista de produtos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
        <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type='number' value={price} name='price' onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <input type='submit' value='Criar produto'/>
          </form>      
        </div>
      </div>
    </>
  )
}

export default App
