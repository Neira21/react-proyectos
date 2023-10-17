/* eslint-disable react/prop-types */
import { ModalFormulario } from "./ModalFormulario"
import { useState } from "react"
import { IMG_URL } from '../constants/api'

const Pelicula = ({movie}) => {
  const [modal, setModal] = useState(false)

  const handleModal = () => {  
    setModal(!modal)
  }

  return (
    <div className='pelicula' key={movie.id}>
      <div>
        {movie.title} 
      </div>
      <div>
        <img src={`${IMG_URL}${movie.poster_path}`} onClick={handleModal} alt={movie.title} />
      </div>
      {modal 
        ? <ModalFormulario movie={movie} handleModal={handleModal}/>
        : null 
      }
    </div>
  )
}

export default Pelicula