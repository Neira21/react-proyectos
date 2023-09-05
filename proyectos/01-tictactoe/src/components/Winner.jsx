import Square from "./Square"

const Winner = ({winner, gameRestart} ) => {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : `Ganador: ${winner}`

    return(
        <div className='winner'>
            <div className='text'>
              <h2>
                {winnerText}
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

export default Winner;