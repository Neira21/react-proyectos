
/* eslint-disable */
import Tarea from "./Tarea";


const Content = ({tasks, editTask, deleteTask, openEditModal }) => {
  return (   
    <div className="contenedor-tarea" >
    {tasks.length === 0 && <p className="mensaje">No hay tareas</p>}
      {tasks.map((task)=> (
        <Tarea 
          task={task} key={task.id} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          openEditModal={openEditModal}
          />
      ))}
    </div>
  )
}

export default Content