import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ModalTodoReducer = ({ modal, handleClose, tareaEditar, onEdit }) => {
  const [tarea, setTarea] = useState('')

  useEffect(() => {
    setTarea(tareaEditar); // Setear el valor inicial del input con la tarea a editar
  }, [tareaEditar]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleGuardarCambios = () => {
    // TODO: Aquí puedes llamar a la función para guardar los cambios con la nueva tarea
    onEdit(tarea); // Llamar a la función onSubmit con la nueva tarea
    handleClose(); // Cerrar el modal
  };

  return (
    <div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ejemplo de Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            className="form-control" 
            name="tarea"
            placeholder="Agregar nueva tarea"
            onChange={handleChange}
            value={tarea}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleGuardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalTodoReducer