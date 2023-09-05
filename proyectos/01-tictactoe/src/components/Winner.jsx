import Square from "./Square"
import PropTypes from 'prop-types';


const Winner = ({winner, gameRestart} ) => {
  
    Winner.propTypes = {
      winner: PropTypes.bool,
      gameRestart: PropTypes.func
    }
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