/* eslint-disable react/prop-types */
import './ModalFormulario.css'
import { useState } from 'react'
import {BASE_URL} from '../constants/api'

/*
  https://api.themoviedb.org/3/movie/{movie_id}/rating
*/



// movie/{movie_id}/rating?api_key=<<api_key>>&guest_session_id=<<guest_session_id>>'

export const ModalFormulario = ({handleModal, movie}) => {
  const [calificacion, setCalificacion] = useState(0)
  const handleChange = (e) => {
    setCalificacion(e.target.value)    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(calificacion)
    AgregarCalificacion()
  }

  const AgregarCalificacion = async () => {
    console.log(`${BASE_URL}/movie/${movie.id}/rating?api_key=${import.meta.env.VITE_API_KEY}`)
    const response = await fetch(`${BASE_URL}/movie/${movie.id}/rating?api_key=${import.meta.env.VITE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODZlZTUyY2U2MGM5ZWJiMzgwNTEyN2RiNTNkN2Y2NyIsInN1YiI6IjYyYzBjYjE2NTMyYWNiMDMyOGQyNmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UbHOvXv3cT2bIHqz86uBHYGBj8VUyqB9PbCN477p9FM',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: calificacion
      })
    })

    const data = await response.json()
    console.log(data)
  }



  return (
    <div className='modal'>
      <div className='modal_contenedor'>
        <div className='modal_header'>
          <h2 className='modal_title'>{movie.title}</h2>
        </div>

        <div className='modal_imagen'>
          <img src={movie.imagen} alt="" />
        </div>

        <p>Agregar Calificación (0 - 10)</p> 
        <div className='modal_body'>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <input 
                onChange={handleChange} 
                value={calificacion} 
                type='text'
                />
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
