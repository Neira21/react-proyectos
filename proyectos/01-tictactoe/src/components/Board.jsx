import Square from "./Square"

const Board = ({updateBoard, board}) => {
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