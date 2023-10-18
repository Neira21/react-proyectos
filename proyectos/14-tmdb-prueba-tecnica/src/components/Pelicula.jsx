/* eslint-disable react/prop-types */
import { ModalFormulario } from "./ModalFormulario"
import { useState } from "react"

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
        <img src={movie.imagen} onClick={handleModal} alt={movie.title} />
      </div>
      <div>
        {movie.rating}
      </div>
      <div>
        {movie.year}
      </div>
      {modal 
        ? <ModalFormulario movie={movie} handleModal={handleModal}/>
        : null 
      }
    </div>
  )
}

export default Pelicula