import { useState } from 'react'
import PropTypes from 'prop-types'

const FormularioTodo = ({construirTodo}) => {
  
  FormularioTodo.propTypes = {
    construirTodo: PropTypes.func.isRequired,
  };

  const [input, setInput] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(input === ''){
      alert('Debes ingresar una tarea')
      return
    }
    setInput('')
  }

  const handleChangeInput = (e) =>{
    setInput(e.target.value)
  }

  return(
    <form className='formularioTodo' onSubmit={handleSubmit}>
      <input className='formularioTodo-input' type='text' placeholder='Aprender React' value={input} onChange={handleChangeInput} />
      <button className='formularioTodo-button' type='submit' onClick={()=>construirTodo(input)}> Guardar Tarea </button>
    </form>
  )
}
export default FormularioTodo