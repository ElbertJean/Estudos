import './App.css'

import senjutsu from './assets/senjutsu.png';
import prowler from './assets/prowler.png';
import logo from './assets/logo.png';

function App() {

  return (
    <div className='container'>
      <div className='containerCard'>
        <div className='card'>
          <img src={logo} className='logo'/>
          <h2 className='title'>Cadastre-se e fique por dentro das novidades da<br></br>melhor banda do mundo!</h2>
          <form className='formulario'>
              <div className='divInput'>
                <input placeholder='E-mail' type='text'/>
                <input placeholder='Senha' type='password'/ >
              </div>
              <p className='paragraph'>Cadastre-se</p>
              <a className='button'>
                <p className='textButton'>Entrar</p>
              </a>
          </form>
        </div>
      </div>
      <div className='containerImage'>
        <div className='cardImage'>
          <img src={prowler} className='image'/>
        </div>
      </div>
    </div>
  )
}

export default App
