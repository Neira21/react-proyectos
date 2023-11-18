import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        <Link to='/'>
          <li>Inicio</li>
        </Link>
        <Link to='/pokemonlista'>
          <li>Lista de Pokemon</li>
        </Link>
        <Link to='/pokedex'>
          <li>Pokedex</li>
        </Link>
        <Link to='/'>
          <li>Habilidades</li>
        </Link>
        <Link to='/evoluciones'>
          <li>Evoluciones</li>
        </Link>
        
        
      </ul>
    </div>
  )
}

export default NavBar