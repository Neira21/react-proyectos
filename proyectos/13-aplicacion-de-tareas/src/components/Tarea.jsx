/*eslint-disable*/ 

const Tarea = ({tarea, CompletarTarea}) => {

  const CheckChange = (tarea) => {
    CompletarTarea(tarea.id)
  }

  return (
    <div className='tarea-elemento'>
      <p>{tarea.texto}</p>
      <input type="checkbox" onChange={()=>CheckChange(tarea)} checked={tarea.completada} />
    </div>
  )
}

export default Tarea