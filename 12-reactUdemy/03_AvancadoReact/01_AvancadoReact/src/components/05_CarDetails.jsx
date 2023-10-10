import React from 'react';

const CarDetails = ({id, brand, km, color}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>ID: {id}</li>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails;
