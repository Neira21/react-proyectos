import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='app'>
       <h1>Sistema de Inventario</h1>
      <div className='contenedor-opciones'>
        <Link to='/inventario' >
          <div className='opcion'>Inventario</div>
        </Link>
        <Link to='/entradasalida'>
          <div className='opcion'>Entrada/Salida de productos</div>
        </Link>
        <Link to='/reportes'>
          <div className='opcion'>Reportes</div>  
        </Link>
        <Link to='/usuarios'>
          <div className='opcion'>Usuarios</div>
        </Link>
      </div>
    </div>
  )
}

export default Home