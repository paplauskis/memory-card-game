import Header from './components/header/Header'
import StartWindow from './components/start-window/Start-window'
import Cards from './components/cards/Cards'
import { useState, useEffect } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data.results)
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <Header />
      <StartWindow />
      <Cards pokemon={pokemon}/>
    </>
  )
}

export default App
