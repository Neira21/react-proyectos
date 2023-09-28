import FormularioTodo from "./FormularioTodo"
import Todo from "./Todo"
import { useState } from 'react'

const ListaTodos = () => {
  const [todos, setTodos] = useState([])

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleEdit = (id, newTodo) =>{
    const newTodos = todos.map(todo => todo.id === id ? {...todo, text: newTodo} : todo)
    console.log(id, newTodo)
    setTodos(newTodos)
  }

  const construirTodo = (todo) => {
    if(todo === '') return
    const newTodo = {
      id: new Date().getTime(),
      text: todo, 
      completada: false
    }
    setTodos([ newTodo, ...todos ])
  }

  const completarTarea = id => {
    const tareasActualizadas = todos.map(todo => {
      if (todo.id === id) {
        todo.completada = !todo.completada;
      }
      return todo;
    });
    setTodos(tareasActualizadas);
  }


  return (
    <div>
      <FormularioTodo construirTodo={construirTodo} />
      <div className='Lista de tareas'>
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} completada={todo.completada} completarTarea={completarTarea} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  )
}

export default ListaTodos