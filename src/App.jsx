import Header from './components/header/Header'
import StartWindow from './components/start-window/Start-window'
import Cards from './components/cards/Cards'
import pokemonData from './utils/data'
import { useState } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function handleCardClick(clicked) {
    if (clicked) {
      console.log('second');
    } else {
      console.log('first');
    }
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <StartWindow />
      <Cards pokemon={pokemonData} onCardClick={handleCardClick} />
    </>
  )
}

export default App
