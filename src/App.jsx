import Header from './components/header/Header'
import StartWindow from './components/start-window/Start-window'
import Cards from './components/cards/Cards'
import pokemonData from './utils/data'
import { useEffect, useState } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  function handleCardClick(clicked) {
    if (clicked) {
      setGameOver(true)
    } else {
      setCurrentScore(currentScore + 1)
    }
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
      <Cards pokemon={pokemonData} onCardClick={handleCardClick} />
    </>
  )
}

export default App
