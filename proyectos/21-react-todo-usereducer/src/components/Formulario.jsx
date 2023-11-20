/* eslint-disable */

const Formulario = ({dispatch}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'AGREGAR_TODO',
      payload: {
        id: crypto.randomUUID(),
        texto: e.target[0].value,
      }
    })
  }

  return (
    <form className='FormularioTodo' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Ingrese una tarea'
      />
      <button>Agregar</button>
    </form>
  )
}

export default Formulario