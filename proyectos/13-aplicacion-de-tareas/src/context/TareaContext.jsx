import { useState, createContext, useEffect } from "react";

export const TareaContext = createContext()

// eslint-disable-next-line
export const TareaProvider = ({children}) => {
  
  const TareaInicial = [
    { id: crypto.randomUUID(), texto: 'Aprender React', completada: false },
    { id: crypto.randomUUID(), texto: 'Aprender Angular', completada: false },
    { id: crypto.randomUUID(), texto: 'Aprender Vue', completada: false },
    { id: crypto.randomUUID(), texto: 'Aprender Svelte', completada: false},
    { id: crypto.randomUUID(), texto: 'Aprender React Native', completada: false }
  ]

  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem('tareas')) || TareaInicial
  )

  const AgregarTarea = (texto) => {
    const nuevaTarea = {
      id: crypto.randomUUID(),
      texto,
      completada: false
    }
    const nuevasTarea = [...tareas, nuevaTarea]
    setTareas(nuevasTarea)
  }


  const CompletarTarea = (id) => {
    // cambiar el estado de la tarea y ponerlo debajo de toda la lista
    setTareas(tareas.map(tarea => (tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea)))
  }

  const EliminarTareasCompletadas = () => {
    const nuevasTareas = tareas.filter(tarea => tarea.completada === false)
    setTareas(nuevasTareas)
  }

  const EliminarTodo = () => {
    setTareas([])
  }


  useEffect(()=>{
    let data = localStorage.getItem('tareas')
    if(data){
      setTareas(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas])

  return(
    <TareaContext.Provider value={{tareas, setTareas, AgregarTarea, CompletarTarea, EliminarTareasCompletadas, EliminarTodo }} >
      {children}
    </TareaContext.Provider>
  )
}

