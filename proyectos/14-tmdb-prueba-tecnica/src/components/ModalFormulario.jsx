/* eslint-disable react/prop-types */
import './ModalFormulario.css'

export const ModalFormulario = ({handleModal, movie}) => {
  return (
    <div className='modal'>
      <div className='modal_contenedor'>
        <div className='modal_header'>
          <h2 className='modal_title'>{movie.title}</h2>
        </div>
        <div className='modal_body'>
          <form action="">
            <label>Formulario</label>
            <input type="text" name="" id="" />
          </form>
        </div>
        <div className='modal_footer'>
          <button className='modal_btn' onClick={handleModal}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
