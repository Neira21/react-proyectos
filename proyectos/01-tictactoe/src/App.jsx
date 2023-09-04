import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

const TURNS  = {
  X: "X",
  O: "O",
}

//Componente Cuadro
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  //Método para actualizar el board
  const updateBoard = (index) => {
    if(board[index] !== null || winner ) return
    
    //Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //Cambiar turno
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

    //Verificar ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      //la actualización de los estados es asíncrona
    }else if(!newBoard.includes(null)){
      setWinner(false)
    }

  }

  const checkWinner = (boardToCheck) => {
    const winningCombinations = [
      [0,1,2], [3,4,5], [6,7,8], // horizontal
      [0,3,6], [1,4,7], [2,5,8], // vertical
      [0,4,8], [2,4,6], // diagonal
    ]
    for(const combo of winningCombinations){
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

  const gameRestart = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <div className="board">
        <div>
          <h1>TIC TAC TOE</h1>
        </div>
        <div>
          <button onClick={()=>gameRestart()}>Reiniciar</button>
        </div>
        <div className='game'>
          {board.map((cell, index) => (
            <Square
              key={index}
              className='cell'
              updateBoard={()=>updateBoard(index)}
            >
              {cell}
            </Square>
          ))}
        </div>
        
        <div className='turn'>
          <Square isSelected={turn=== TURNS.X} >
            {TURNS.X}
          </Square>
          <Square isSelected={turn===TURNS.O} >
            {TURNS.O}
          </Square>
        </div>

        {
          winner !== null && (
            <div className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false
                    ? 'Empate'
                    : `Ganador: ${winner}`
                  }
                </h2>
                <div className='win'>
                  {winner && <Square>{winner}</Square>}
                </div>

                <footer>
                  <button onClick={()=>gameRestart()}>Reiniciar</button>
                </footer>

              </div>
            </div>
          )
        }
        


      </div>

      
    </>
  )
}

export default App
