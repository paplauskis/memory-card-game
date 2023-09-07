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
  }, [url])

  return pokemonUrl
}

function shuffleArray(array) {
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
  // Create state to store the shuffled cards
  const [shuffledCards, setShuffledCards] = useState(pokemon);

  function handleCardClick(e) {
    e.target.clicked ? console.log('gameover') : console.log('good click')
    e.target.clicked = true
    setShuffledCards(shuffleArray([...shuffledCards]));
  }

  return (
    <div className="cards" onClick={handleCardClick}>
      {shuffledCards.map((p) => (
        <div className="card" key={p.name}>
          <img src={getPokemonImg(p.url)} alt={`${p.name}, Pokémon`} />
          <p>{p.name.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
}


export default Cards
