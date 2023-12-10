
/* eslint-disable */
import Tarea from "./Tarea";


const Content = ({tasks, handleCheck, deleteTask, openEditModal }) => {
  return (   
    <div className="contenedor-tarea" >
    {tasks.length === 0 && <p className="mensaje">No hay tareas</p>}
      {tasks.map((task)=> (
        <Tarea 
          task={task} key={task.id} 
          handleCheck={handleCheck} 
          deleteTask={deleteTask} 
          openEditModal={openEditModal}
          />
      ))}
    </div>
  )
}

export default Content