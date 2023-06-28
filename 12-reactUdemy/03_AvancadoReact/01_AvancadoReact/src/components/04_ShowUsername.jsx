import React from 'react'

const ShowUsername = (props) => {
  return (
    <div>
        <h2>O nome do usuário é:</h2>
        <p>Meu nome é {props.name}, tenho {props.age} anos e moro em {props.city}</p>
    </div>
  )
}

export default ShowUsername;
