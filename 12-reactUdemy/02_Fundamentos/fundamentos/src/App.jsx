import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {

  const nome = "Bert";
  const data = {
    age:27,
    job:'Garoto de programa',
  };

  return (
    <div>
      <h1>Hello World{nome}</h1>
      <h1>{data.job}</h1>
      <FirstComponent />
    </div>
  )
}

export default App
