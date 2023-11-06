import Contenido from '../components/Contenido'
import Encabezado from '../components/Encabezado'
import PiePagina from '../components/PiePagina'

import placeholder from '../assets/assets1/placeholder.png'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
      <Encabezado></Encabezado>
      <Contenido title='Popular Titles'>
        <div className='bloque-contenedor'>
          <Link to='/series' className='bloque'>
            <div>
              <p>SERIES</p>
              <img src={placeholder} alt="" />
            </div>
          </Link>
          <Link to='/peliculas' className='bloque' >
          <div>
            <p>MOVIES</p>
            <img src={placeholder} alt="" />
          </div>
          </Link>
        </div>
      </Contenido>
      <PiePagina/>

    </div>
  )
}

export default Inicio