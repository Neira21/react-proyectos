const ListaTodoReducer = ({state, finalizarTarea, borrarTarea, borrarTodasTareas, actualizarTarea}) => {
  return (
    <>
    <button onClick={borrarTodasTareas} className="btn btn-danger">Borrar todas las tareas</button>
    <ul className="list-group" >
      {state.map((item) =>  {
        return(
          <li className="list-group-item d-flex justify-content-between p-3 mb-2 bg-info-subtle text-info-emphasis" key={item.id}>
            <input 
              style={{width: '30px', height: '30px', cursor: 'pointer'}}
              type="checkbox" 
              value={item.finalizada}
              onChange={()=>finalizarTarea(item)}
              />
            <span className={item.finalizada ? 'finalizado': ''} >{item.tarea}</span>
            <div >
              <button onClick={() => borrarTarea(item.id)}  style={{marginRight:'18px'}}  className="btn btn-danger">Delete</button>
              <button onClick={()=> actualizarTarea(item)}  className="btn btn-warning">Editar</button>
            </div>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default ListaTodoReducer