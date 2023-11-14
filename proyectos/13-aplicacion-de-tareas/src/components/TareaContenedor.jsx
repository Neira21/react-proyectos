/* eslint-disable */
import { TareaContext } from "../context/TareaContext"
import Tarea from "./Tarea"
import { useContext, useState } from 'react'

const TareaContenedor = () => {
  
  const {tareas, CompletarTarea, EliminarTareasCompletadas, EliminarTodo} = useContext(TareaContext)

  const [mostrarCompletadas, setMostrarCompletadas] = useState(false)

  const tareasNoCompletadas = tareas.filter(tarea => tarea.completada === false)
  const tareasCompletadas = tareas.filter(tarea => tarea.completada === true)

  

  return (
    <>
      {tareasCompletadas.length >= 0 && (
          <p style={{textAlign:'center'}}>Tareas Completadas: {tareasCompletadas.length+'/'+tareas.length }</p>
        )}
      
      {tareasNoCompletadas.length === 0 && (<p style={{textAlign:'center'}}>No hay tareas para mostrar</p>)}

      <div className='tareas-contenedor'>
          {tareasNoCompletadas.map((tarea) => {
            return (
              <Tarea key={tarea.id} tarea={tarea} CompletarTarea={CompletarTarea} />
            )
          })}
      </div>
      <br />
      <button onClick={() => setMostrarCompletadas(!mostrarCompletadas)}>{!mostrarCompletadas ? 'Mostrar Completadas'  : 'Ocultar Completadas'} </button>
      
      {mostrarCompletadas && (
          <div className='tareas-contenedor'>
            {tareasCompletadas.length === 0 && (<p>No hay tareas para mostrar</p>)}
            {tareasCompletadas.map((tarea) => {
              return (
                <Tarea key={tarea.id} tarea={tarea} CompletarTarea={CompletarTarea} />
              )
            })}
          </div>
        )
      }

      <div style={{display:"flex", justifyContent:'center', alignItems:'center', gap:'20px', marginTop:'10px'}}>
        <button onClick={EliminarTareasCompletadas} >Eliminar Completadas</button>
        <br />
        <button onClick={EliminarTodo}>Eliminar Todos</button>
      </div>
      
    </>
  )
}

export default TareaContenedor