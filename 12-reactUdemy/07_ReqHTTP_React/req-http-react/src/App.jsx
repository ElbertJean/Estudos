import { useState, useEffect } from 'react';
import './App.css'
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);
  
  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //2- Adicionar produtos

  const handleSubmit = async (e) => {
    e.preventDefault();   //cancela o reload automatico do form

    const product = {
      name,   //iguala ao valor do useState name
      price,  //iguala ao valor do useState price
    };
    
    httpConfig(product, "POST")

    setName('');
    setPrice('');
  }

  return (
    <>
      <div style={{textAlign:'center'}}>
        <h1>Requisições HTTP com React</h1>
        <h2>Lista de produtos</h2>
        {/* 6 - loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!loading && (
          <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
          </ul>
        ) }
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
            {/* 7 - state de loagind no post */}
            {loading && <input type='submit' disabled value='Aguarde'/>}
            {!loading && <input type='submit' value='Criar produto'/>}
          </form>      
        </div>
      </div>
    </>
  )
}

export default App
