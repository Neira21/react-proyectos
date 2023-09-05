import Square from "./Square"
import PropTypes from 'prop-types';

const Board = ({updateBoard, board}) => {
    Board.propTypes = {
      updateBoard: PropTypes.func,
      board: PropTypes.array
    }
    return(
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
    )
}

export default Board