import React from 'react'

const GameOverScreen = ({retry, score}) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar o jogo</button>
    </div>
  )
}

export default GameOverScreen
