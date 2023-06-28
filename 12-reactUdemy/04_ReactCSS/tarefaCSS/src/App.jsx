import './App.css'
import Render from './components/Render';

function App() {
  
  const cars = [
    {id:1, name:"Chevette", color:"Cinza", km: 5000},
    {id:1, name:"Onix", color:"Vermelho", km: 0},
    {id:1, name:"Prisma", color:"Branco", km: 200},
  ]

  return (
    <>
      <div className='containerTitle'>
        <h1 className="title">Carros São José dos Campos</h1>
      </div>
      <div className='containerCard'>
        {cars.map((car) =>
          <div>
            <Render car={car}/>
          </div>
        )}
      </div>
    </>
  )
}

export default App
