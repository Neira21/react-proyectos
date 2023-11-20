/* eslint-disable */
import { useState } from "react"
const ListaTareas = ({listatareas, dispatch}) => {

  const [abrirModal, setAbrirModal] = useState(false)
  const [tareaEditar, setTareaEditar] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ACTUALIZAR_TODO',
      payload: {
        id: tareaEditar.id,
        texto: e.target[0].value,
      }
    })
    setAbrirModal(false)
  }

  return (
    <div className="ListaTareasContenedor">
      {listatareas.map((tarea)=>
      <div className="TareElemento" key={tarea.id}>
        
        <div>
          {tarea.texto}
        </div>
        <div>
          <button onClick={()=>{setAbrirModal(true); setTareaEditar(tarea)}} >Editar</button>
          <button onClick={()=>dispatch({type: 'ELIMINAR_TODO' , payload: tarea.id})} >Eliminar</button>
        </div>
      </div>
      )}
      
      {abrirModal &&
        <div className="Modal">
          <div className="ModalContenedor">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                value={tareaEditar.texto}
                onChange={(e)=>{setTareaEditar({...tareaEditar, texto: e.target.value})}}
              />
              <button>Actualizar</button>
            </form>
            <button onClick={()=>setAbrirModal(false)} >Cancelar</button>
          </div>
        </div>
        }
    </div>
  )
}

export default ListaTareas