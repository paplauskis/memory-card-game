import './Start-window.css'
import { useState } from 'react'

function StartWindow() {
  const [show, setShow] = useState(true)

  function handleClick() {
    setShow(false)
  }
  
  return (
    <>
      {show && (
        <div className="background-div">
          <div className="start-window pop-up-window">
            <h2 className="instructions">Instructions</h2>
            <p className="description">
              Don't click on the same card twice. That's about it. Good luck!
            </p>
            <button onClick={handleClick}>Let's go!</button>
          </div>
        </div>
      )}
    </>
  )
}

export default StartWindow
