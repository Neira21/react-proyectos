/* eslint-disable react/prop-types */
import { useState } from 'react'



const TareaToDo = ({tarea, onUpdate, onDelete}) => {

  const [edit , setEdit] = useState(false)

  function EditFormato(){
    const [newValue, setNewValue] = useState(tarea.tareaTitulo)
    
    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const handleChange = (e) =>{
      const value = e.target.value
      setNewValue(value)
    }

    const handleClickEditTodo = () => {
      onUpdate(tarea.id, newValue)
      setEdit(false)
    }

    return (
      <form className='todoUpdateForm' onClick={handleSubmit}>
        <input type='text' className='todoInput' value={newValue} onChange={handleChange} />
        <button className='button' onClick={handleClickEditTodo}>Editar</button>
      </form>
    )
  }

  function TodoFormato(){
    return(
      <div className='todoInfo'>
          <span>{tarea.tareaTitulo}</span>
          <button onClick={() => {setEdit(true)}}>Editar</button>
          <button onClick={() => {onDelete(tarea.id)} } >Borrar</button>
        </div>
    )
  }

  return (
    <div className='tarea'>
    {edit ? (
      <EditFormato />
      ) : (
        <TodoFormato />
      )}
    </div>
  )
}

export default TareaToDo