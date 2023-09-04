import Header from './components/header/Header'
import StartWindow from './components/start-window/Start-window'
import Cards from './components/cards/Cards'
import { useState, useEffect } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data.results.splice(0, 12))
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <StartWindow />
      <Cards pokemon={pokemon} />
    </>
  )
}

export default App
