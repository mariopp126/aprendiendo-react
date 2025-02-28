import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameToStorage, resetGameToStorage} from './logic/storage'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage != null ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameToStorage()
  }


  const updateBoard = (index) => {
    // Doesn't update de board
    // if it has an item
    if (board[index] || winner) return

    //update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //change turn
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board : newBoard,
      turn: newTurn
    })

    // check winner
    const newWinnwer = checkWinner(newBoard)
    if(newWinnwer){
      confetti()
      setWinner(newWinnwer)

      // TODO: check if the game is over
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

    return (
      <main className='board'>
        <h1>Tic tac toe</h1>
        <section className='game'>
          {
           board.map((square, index) =>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
           }) 
          }
        </section>

        <section className='turn'>
          <Square isSeleccted={turn == TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSeleccted={turn == TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    )
}

export default App
