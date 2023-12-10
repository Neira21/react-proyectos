/* eslint-disable */
import { MdDelete } from "react-icons/md";
//import { MdModeEdit } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Tarea = ({task, handleCheck, deleteTask, openEditModal}) => {
  return (
    <div className='tarea' >
      <input className='tarea-checkbox' type="checkbox" 
      checked={task.done}
      onChange={()=>handleCheck(task.id)}
      />
      <p className={`tarea-texto ${task.done ? 'completada' : ''}`}>{task.text}</p>
      <FaEdit
        className='tarea-delete' size={40} color='blue' 
        onClick={() => openEditModal(task)} 
        />
      <MdDelete 
        className='tarea-delete' size={40} color='red' 
        onClick={()=> deleteTask(task.id)} 
        />
    </div>
  )
}

export default Tarea