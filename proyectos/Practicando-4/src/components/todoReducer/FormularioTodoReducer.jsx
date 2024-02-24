const FormularioTodoReducer = ({onSubmit, InputChange, tarea}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          name="tarea"
          placeholder="Agregar nueva tarea"
          onChange={InputChange}
          value={tarea}
          />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormularioTodoReducer