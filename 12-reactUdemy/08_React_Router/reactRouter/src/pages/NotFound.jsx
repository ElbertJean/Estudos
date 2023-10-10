import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h1>Erro 404</h1>
        <p>Não há nada aqui :(</p>
        <div style={{marginTop:'50px'}}>
            <Link to="/">Voltar para página inicial</Link>
        </div>
    </div>
  )
}

export default NotFound;
