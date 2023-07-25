import './Product.css';
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  
    const {id} = useParams();

    //5 - carregamento do dado individual
    const url  = `http://localhost:3000/products/${id}`;
    const {data: product, error, loading} = useFetch(url);

    console.log(product);

    return (
      <>
        {product && (
            <>
                <h1>{product.name}</h1>
                <div className='container'>
                    <div className='card'>
                        <h2>{product.name}</h2>
                        <p>R$: {product.price}</p>

                        {/* 6 - Nested Routes */}
                        <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <Link style ={{textDecoration:'none'}} to="/">Voltar para home</Link>
                </div>
            </>
        ) }
      </>  
    )
}

export default Product;