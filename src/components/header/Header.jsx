import BestScore from "./scores/Best-score"
import CurrentScore from "./scores/Current-score"

function Header() {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div className="scores">
      <BestScore/>
      <CurrentScore/>
      </div>
    </header>
  )
}

export default Header