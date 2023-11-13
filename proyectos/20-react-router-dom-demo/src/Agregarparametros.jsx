import { useLocation, useNavigate } from "react-router-dom";

const Agregarparametros = () => {
  
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get('search');

  navigate(`/contenedorpelicula?search=${search}`)
  
  // Ver proyecto en D: react/app-react-movietmdb-vite ejemplo más detallado

  return (
    <form className='contenedor-input'>
      <input className='input' type="text"  />
      <button className='boton'>Agregar</button>
    </form>
  )
}

export default Agregarparametros