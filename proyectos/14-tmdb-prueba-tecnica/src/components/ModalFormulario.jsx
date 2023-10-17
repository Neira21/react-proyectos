/* eslint-disable react/prop-types */
import './ModalFormulario.css'
import { IMG_URL } from '../constants/api'

export const ModalFormulario = ({handleModal, movie}) => {
  return (
    <div className='modal'>
      <div className='modal_contenedor'>
        <div className='modal_header'>
          <h2 className='modal_title'>{movie.title}</h2>
        </div>

        <div className='modal_imagen'>
          <img src={`${IMG_URL}${movie.poster_path} `} alt="" />
        </div>

        <p>Agregar Calificación (0 - 100)</p> 
        <div className='modal_body'>
          <form className='form'>
            <div>
              <input type='number'/>
            </div>
            <div>
              <button type='input'>Agregar</button>
            </div>
          </form>
        </div>
        <div className='modal_footer'>
          <button className='modal_btn' onClick={handleModal}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
