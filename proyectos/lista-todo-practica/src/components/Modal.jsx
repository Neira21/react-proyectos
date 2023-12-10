/* eslint-disable */
import { useState, useEffect } from "react";

function Modal({ editingTaskIndex, onClose, editTask }) {
  const [task, setTask] = useState(editingTaskIndex.text);

  return (
    <div className="contenedor">
      <div className="modal-principal">
        <div className="modal-titulo">
          <h1>{editingTaskIndex ? "Editar tarea" : "Agregar tarea"}</h1>
        </div>
        <div className="modal-contenido">
          <input
            className="modal-tarea-input"
            type="text"
            placeholder="Escribe una tarea..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        
        </div>
        <div className="modal-footer">
          <button 
            className="modal-editar"
            onClick={() => editTask(task, editingTaskIndex.id)}
          >
            Editar
          </button>
          <button 
            className="modal-cerrar"
            onClick={onClose} 
          >
            Cerrar
          </button>  
        </div>
      </div>

      
      

    </div>
  );
}

export default Modal;



/*
isOpen && (
      <div className="modal">
        <h2>{taskToEdit ? "Editar tarea" : "Agregar tarea"}</h2>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={task}
          onChange={handleTaskChange}
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSubmit}>
            {taskToEdit ? "Guardar" : "Agregar"}
          </button>
        </div>
      </div>
    )
*/