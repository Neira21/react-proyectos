import { useState } from 'react'

const FormTodo = ({handleAddTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTodo(value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form className='form_todo' onSubmit={handleSubmit} >
      <input type="text" placeholder="Ingresa una nueva tarea" value={value} onChange={handleChange}  />
    </form>
  )
}

export default FormTodo