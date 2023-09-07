import Header from './components/header/Header'
import StartWindow from './components/start-window/Start-window'
import Cards from './components/cards/Cards'
import { useState, useEffect } from 'react'

const arr = [
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
  { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
  { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
  { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
  { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
  { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
  { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
  { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
  { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
  { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
]

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <StartWindow />
      <Cards pokemon={arr} />
    </>
  )
}

export default App
