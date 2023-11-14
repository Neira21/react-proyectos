import { useState } from "react"
import { useContext } from "react"
import { TareaContext } from "../context/TareaContext"

// eslint-disable-next-line
const TareaInput = () => {

  const { AgregarTarea } = useContext(TareaContext)

  const [input, setInput] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!input){
      alert('Ingrese una tarea')
      return
    }else{
      const inputConvertido = input.toLocaleUpperCase()
      AgregarTarea(inputConvertido)
      setInput('')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e)=>setInput(e.target.value)} 
        placeholder="Estudiar..." />
      <input type="submit" value='Ingresar'  />
    </form>
  )
}

export default TareaInput