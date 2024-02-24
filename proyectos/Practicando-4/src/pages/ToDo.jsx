import { useState } from 'react'
import FormTodo from '../components/todo/FormTodo'
import TodoList from '../components/todo/TodoList'


const Todo = () => {
  const initialTodo = [
    {
      id: crypto.randomUUID(),
      title: 'Aprender React',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Aprender Vue',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Aprender Angular',
      completed: true
    
    }
  ]
  const [todos, setTodos ] = useState(initialTodo)

  const handleAddTodo = (value) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleEditTodo = (todo) => {
  
  }

  const handleChangeCompleteTodo = (id) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>Lista de ToDo</h1>
      <FormTodo handleAddTodo={handleAddTodo}></FormTodo>
      <TodoList 
        todos={todos} 
        handleChangeCompleteTodo={handleChangeCompleteTodo} 
        handleDeleteTodo={handleDeleteTodo}
        />
    </div>
  )
}

export default Todo