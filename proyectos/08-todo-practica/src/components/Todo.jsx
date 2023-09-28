import { useState } from "react"
import PropTypes from 'prop-types'

const Todo = ({todo, onDelete, onEdit, completada, completarTarea }) => {
  
  Todo.propTypes = {
    todo: PropTypes.shape({
      completada: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    completarTarea: PropTypes.func.isRequired,
    completada: PropTypes.bool.isRequired,
  };

  const [edit , setEdit] = useState(false)
  const [newTodo, setNewTodo] = useState(todo.text)

  const handleChangeInput = (e) =>{
    setNewTodo(e.target.value)
  }

  const handleClickUptate = () => {
    onEdit(todo.id, newTodo) 
    setEdit(false)
  }

  return (
    <div className="todoContainer">
      {edit 
        ?
          <div>
            <form>
              <input type="text" value={newTodo} 
                className="formularioTodo-input" 
                onChange={handleChangeInput} 
                /> 
              <button className="boton boton-editar" onClick={()=>handleClickUptate() }>Guardar</button>
            </form>
            
          </div>
        : <div className="containerElement">
            <div
              onClick={() => completarTarea(todo.id)}
              className={completada ? 'todo completada' : 'todo'}
            >
              <p>{todo.text} {!todo.completada && '👈' }</p>
            </div>
            <div className="botones">
              <button className="boton boton-editar" onClick={()=>setEdit(true)} > Editar </button>
              <button className="boton boton-borrar" onClick={()=>onDelete(todo.id)} > Borrar </button>
            </div>
          </div>
      }
    </div>
  )
}

export default Todo