import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import Winner from './components/Winner'
import { TURNS } from './components/Constantes.js'
import {checkWinner} from './logic/checkWinner.js'

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
        
        <Winner winner={winner} gameRestart={gameRestart} ></Winner>

      </div>

      
    </>
  )
}

export default App
