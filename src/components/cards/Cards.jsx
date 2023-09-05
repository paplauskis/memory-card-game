import './Cards.css'
import { useEffect, useState } from 'react'

function Cards({ pokemon }) {
  const cards = createCards({ pokemon })
  // const [cardData, setCardData] = useState(cards)

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

  function createCards({ pokemon }) {
    const cardDivs = []

    pokemon.forEach((p, index = 0) => {
      if (++index <= 12) {
        cardDivs.push(
          <div className="card" key={p.name}>
            <img src={getPokemonImg(p.url)} alt={`${p.name}, pokemon`} />
            <p>{p.name.toUpperCase()}</p>
          </div>
        )
      }
    })

    return cardDivs
  }

  function handleCardClick(e) {
    e.target.clicked = true
    console.log(e.target)
    
  }

  return (
    <div className="cards" onClick={handleCardClick}>
      {cards}
    </div>
  )
}

export default Cards
