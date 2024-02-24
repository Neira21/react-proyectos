const TodoList = (
  {
    todos,
    handleChangeCompleteTodo,
    handleDeleteTodo
  }) => {
  return (
    <div className='todo_container_principal'>
      {todos.map(todo => (
          <div key={todo.id} className='todo_item' >
            <input type="checkbox" 
              onChange={() => handleChangeCompleteTodo(todo.id)}
              checked={todo.completed} 
            />
            <div style={{display:'flex', alignItems:'center'}} >
              <p >{todo.title}</p>
            </div>
            
            <div className='acciones'>
              <button className="btn btn-warning" onClick={() => handleEditTodo(todo)}>Editar</button>
              <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
            </div>
          </div>
      ))}
    </div>
  )
}

export default TodoList