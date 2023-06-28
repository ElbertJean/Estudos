import React from 'react'
import './Render.css';

const Render = ({car}) => {
  return (
    <div className='card'>
        <h1>Carro: {car.name}</h1>
        <p>ID: {car.id}</p>
        <p>Cor: {car.color}</p>
        <p>KM: {car.km}</p>
    </div>
  )
}

export default Render
