import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import Winner from './components/Winner'
import { TURNS } from './components/Constantes.js'
import {checkWinner} from './logic/checkWinner.js'
import Board from './components/Board'

function App() {
  
  //No se puede poner el local storage acá porque se ejecuta una sola vez
  //Los useState se ejecutan cada vez que se renderiza el componente y no pueden estar dentro de un if
  
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
      if(boardFromStorage){
        return JSON.parse(boardFromStorage)
      }
    return Array(9).fill(null)
    }
  )
  const [turn, setTurn] = useState(
    ()=>{
      const turnFromStorage = window.localStorage.getItem('turn')
      return turnFromStorage ?? TURNS.X
      // ?? devuelve el primer valor si es verdadero o el segundo si es falso
      // ||  en caso de que el primer valor sea nulo o indefinido, devuelve el segundo valor
    }
  )
  const [winner, setWinner] = useState(null)

  //Método para actualizar el board
  const updateBoard = (index) => {
    if(board[index] !== null || winner ) return
    
    //Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))

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
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
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
        <Board updateBoard={updateBoard} board={board} />
        
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
