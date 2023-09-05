import {winningCombinations} from '../components/Constantes.js'

export const checkWinner = (boardToCheck) => {
    for(const combo of winningCombinations){
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }