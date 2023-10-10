import logo from '../logo.svg';
import '../App.css';
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';

function Main() {

  const { t, i18n } = useTranslation();
 
  const changeLanguage = (value) => {
    i18n.changeLanguage(value)
    .then( () => {
      console.log('Linguagem alterada com sucesso')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
        <header className="App-header">
            <h1>{t('Página Home')}</h1>
            <div style={{marginBottom:'40px'}}>
                <button onClick={() => changeLanguage('pt')} style={{marginRight:'10px'}}>Português - Brasil</button>
                <button onClick={() => changeLanguage('en')} style={{marginRight:'10px'}}>Inglês</button>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            {t('Edit src/App.js and save to reload.')}
            </p>
            <p>
            {t('Hello World with i18next library')}
            </p>
            <nav>
              <NavLink to="/contato">{t('Learn React')}</NavLink>
            </nav>
        </header>
    </div>
  );
}

export default Main;
