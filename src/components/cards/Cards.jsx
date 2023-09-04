import './Cards.css'
import { useEffect, useState } from 'react'

function getPokemonImg(url) {
  const [pokemonUrl, setPokemonUrl] = useState(null)
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        setPokemonUrl(data.sprites.other['official-artwork'].front_default)
      )
      .catch((error) =>
        console.log('Error, could not load pokemon image:', error)
      )
  }, [])

  return pokemonUrl
}

function shufflePokemons(array) {
  let al = array.length,
    randomNum,
    i

  while (al) {
    randomNum = Math.floor(Math.random() * al--)
    i = array[al]
    array[al] = array[randomNum]
    array[randomNum] = i
  }
  return array
}

function Cards({ pokemon }) {
  shufflePokemons(pokemon)

  function handleCardClick(e) {
    e.target.value = 'clicked'
  }

  return (
    <div className="cards">
      {pokemon.map((p, index = 0) => {
        if (++index <= 12) {
          return (
            <div className="card" key={p.name} onClick={handleCardClick}>
              <img src={getPokemonImg(p.url)} alt={`${p.name}, pokemon`} />
              <p>{p.name.toUpperCase()}</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Cards
