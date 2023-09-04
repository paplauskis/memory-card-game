import './Cards.css'
import { useEffect, useState } from 'react'

function getPokemonImg(url) {
  const [pokemonUrl, setPokemonUrl] = useState(null)
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPokemonUrl(data.sprites.other['official-artwork'].front_default))
      .catch((error) => console.log('Error, could not load pokemon image:', error))
  }, [])

  return pokemonUrl
}

function Cards({ pokemon }) {
  return (
    <div className="cards">
      {pokemon.map((p, index = 0) => {
        if (++index <= 12) {
          return (
            <div className="card" key={p.name}>
              <img src={getPokemonImg(p.url)} alt="pokemon" />
              <p>{p.name.toUpperCase()}</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Cards
