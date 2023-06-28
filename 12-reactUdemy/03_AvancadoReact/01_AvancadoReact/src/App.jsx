import React from 'react';

import './App.css'
import img2 from './assets/img2.jpg';
import CountNumber from './components/01_CountNumber';
import ListRender from './components/02_ListRender';
import ConditionalRender from './components/03_ConditionalRender';
import ShowUsername from './components/04_ShowUsername';
import CarDetails from './components/05_CarDetails';
import Fragments from './components/06_Fragments';
import Container from './components/07_Container';
import ExecuteFunction from './components/08_ExecuteFunction';

function App() {
  
  const cars = [
    {id:1, brand:"Ferrari", color:"Vermelho", km:0},
    {id:2, brand:"BMW", color:"Branco", km:0},
    {id:3, brand:"Chevette", color:"Cinza", km:10000}
  ]

  function showMessage () {
    const name = prompt ("Qual é o seu nome?");
    alert(`Meu nome é ${name}`);

    const valor = document.getElementById("teste");
    valor.innerHTML = `${name}`
  }
  
  return (
    <>
      <div>
        <h1>Avançado com React</h1>
        <img src="/img1.jpg" alt="Imagem 1" width='70%'/>
        <img src={img2} width='70%'/>
      </div>
      <CountNumber />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUsername name="Elbert" age="27" city="São José dos Campos"/>
      
      {/* Destructuring props */}
      <CarDetails brand="Chevrolet" km={5000} color="Vermelho"/>
      
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails id={car.id} brand={car.brand} color={car.brand} km={car.km}/>
      ))}

      {/* Fragmentos */}
      <Fragments />

      {/* Children */}
      <Container>
        <h1>Ao trem bão</h1>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>
    </>
  )
}

export default App;
