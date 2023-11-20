import { useEffect, useReducer } from 'react'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'
import './App.css'

/* eslint-disable */

function App() {
  const listaTodo = [
    {
      id: crypto.randomUUID(),
      texto: 'Aprender React',
    },
    {
      id: crypto.randomUUID(),
      texto: 'Aprender Redux',
    }
  ]

  const reducer = (state, action) => {
    switch (action.type){
      case 'AGREGAR_TODO':
        return [...state, action.payload]
      case 'ELIMINAR_TODO':
        return state.filter((tarea) => tarea.id !== action.payload)
      case 'ACTUALIZAR_TODO':
        return state.map((tarea) => tarea.id === action.payload.id ? {...tarea, texto: action.payload.texto} : tarea)
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('tareas')) || listaTodo )

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(state))
  },[])

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(state))
  },[state])

  return (
    <>
      <h1>
        Todo App
      </h1>
      <Formulario dispatch = {dispatch} />
      <ListaTareas listatareas = {state} dispatch={dispatch} />
    </>
  )
}

export default App
