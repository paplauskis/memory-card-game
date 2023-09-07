import Header from './components/header/Header'
import StartWindow from './components/start-window/Start-window'
import Cards from './components/cards/Cards'
import pokemonData from './utils/data'
import GameOverWindow from './components/game-over-window/Game-over-window'
import { useEffect, useState } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameOverScore, setGameOverScore] = useState(0)

  function handleCardClick(clicked) {
    if (clicked) {
      setGameOver(true)
      setGameOverScore(currentScore)
      setCurrentScore(0)
    } else {
      setCurrentScore(currentScore + 1)
    }
  }

  function handleGameOver(bool) {
    setGameOver(bool)
  }

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }, [currentScore])

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <StartWindow />
      {gameOver && <GameOverWindow score={gameOverScore} gameOver={gameOver} removeGameOver={handleGameOver}/>}
      <Cards pokemon={pokemonData} onCardClick={handleCardClick} />
    </>
  )
}

export default App
