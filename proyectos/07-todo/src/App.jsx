import { useState } from 'react'
import './App.css'
import TareaToDo from '../components/TareaToDo'

function App() {
  const [tareaName, setTareaName] = useState('')
  const [tareas, setTareas] = useState([])
  

  const handleChange = (e) =>{
    const value = e.target.value
    setTareaName(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!tareaName) return
    const newTarea = {
      id: new Date().getTime(),
      tareaTitulo: tareaName,
      completada: false
    }
    const temp = [...tareas]
    temp.unshift(newTarea)
    setTareas(temp)

    setTareaName('')
  }

  const handleUpdate = (id, newValue) => {
    const temp = [...tareas]
    const item = temp.find((tarea) => tarea.id === id)
    item.tareaTitulo = newValue
    setTareas(temp)
  }

  const handleDelete = (id) => {
    const temp = tareas.filter( (tarea) => tarea.id !== id )
    setTareas(temp)
  }

  return (
    
      <div className='app-todo-container'>
        <form className='formulario-todo' onSubmit={handleSubmit}>
          <input 
            className='formulario-input-tarea'
            onChange={handleChange}
            value={tareaName}
            />
          <input className='formulario-submit-tarea' type='submit' value='Agregar Tarea' />
        </form>

        <div className='lista-tareas'>
          {tareas.map((tarea) => (
            <TareaToDo tarea={tarea} key={tarea.id} onUpdate={handleUpdate} onDelete={handleDelete}/>
          ))}
        </div>
      </div>
  )
}

export default App
