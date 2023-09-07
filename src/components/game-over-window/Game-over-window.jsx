import './Game-over-window.css'
import { useState } from 'react'

function GameOverWindow({ score, removeGameOver }) {
  const [show, setShow] = useState(true)

  function handleClick() {
    setShow(false)
    removeGameOver(false)
  }

  return (
    <>
      {show && (
        <div className="background-div game-over-background">
          <div className="game-over-window pop-up-window">
            <h2 className="game-over-title">
              {score === 12 ? <>Woohoo!</> : <>Game Over!</>}
            </h2>
            <p className="description">
              {score === 12 ? (
                <>You reached the maximum score, congratulations!</>
              ) : (
                <>
                  You clicked the same card twice <br></br>
                </>
              )}
            </p>
            <p>
              Your score was: <span>{score}</span>
            </p>
            <button onClick={handleClick}>Try again</button>
          </div>
        </div>
      )}
    </>
  )
}

export default GameOverWindow
