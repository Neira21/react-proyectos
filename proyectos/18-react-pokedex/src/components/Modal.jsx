const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-titulo">
        Titulo: Detalles de pokemon
      </div>
      <div className="modal-contenido">
        <h3>Nombre</h3>
        <h3>Estadísticas</h3>
        <h3>Evoluciones</h3>
      </div>
      <div className="modal-piepagina">
        <button>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal