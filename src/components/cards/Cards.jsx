import './Cards.css'
import { useEffect, useState } from 'react'

function Cards() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons[11]}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
      })
  })
}

const pokemons = [
  'rattata',
  'raticate',
  'pidgeot',
  'pidgey',
  'beedrill',
  'kakuna',
  'weedle',
  'butterfree',
  'metapod',
  'caterpie',
  'blastoise',
  'charizard'
] 

export default Cards
