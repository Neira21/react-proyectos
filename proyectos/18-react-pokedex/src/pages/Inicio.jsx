import { Link } from "react-router-dom"
import regiones from "../assets/regiones-pokemon.png"
import pokedex from "../assets/pokedex.png"
import items from "../assets/itemspokemon.jpg"
import evolucion from "../assets/evolucion.jpg"

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="flex-row">
        <Link to='/pokemonlista' >
          <h2>Lista de POKEMON</h2>
          <img style={{objectFit:'cover'}} width={300} height={200} src={pokedex} alt="" />
        </Link>
        <Link to='/evoluciones'>
          <h2>Evoluciones</h2>
          <img style={{objectFit:'cover'}} width={300} height={200} src={evolucion} alt="" />
        </Link>
      </div>
      <div className="flex-row">
        <Link to='/'>
          <h2>Items</h2>
          <img style={{objectFit:'cover'}} width={300} height={200} src={items} alt="" />
        </Link>
        <Link to='/'>
          <h2>Regiones</h2>
          <img style={{objectFit:'cover'}} width={300} height={200} src={regiones} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Inicio