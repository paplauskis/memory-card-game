import BestScore from './scores/Best-score'
import CurrentScore from './scores/Current-score'
import './Header.css'

function Header({ currentScore, bestScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div className="scores">
        <BestScore bestScore={bestScore} />
        <CurrentScore currentScore={currentScore} />
      </div>
    </header>
  )
}

export default Header
