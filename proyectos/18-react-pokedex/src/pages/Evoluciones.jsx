/* eslint-disable */

import { useEffect, useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import PokemonCartaEvolucion from "../components/PokemonCartaEvolucion";

const Evoluciones = () => {

  const [pokemonId, setPokemonId] = useState(1)
  const [pokemonsEvoluciones, setPokemonsEvoluciones] = useState([])

  const ObtenerListaCadenaEvolucion = async (pokemonId) => {
    const response = await fetch('https://pokeapi.co/api/v2/evolution-chain/'+pokemonId)
    const data = await response.json()
    
    let pokemonEvolucionArray = []
    
    let pokemonNombre1 = data.chain.species.name
    let pokemonImagen1 = await ObtenerImagen(pokemonNombre1)
    pokemonEvolucionArray.push([pokemonNombre1, pokemonImagen1])

    if(data.chain.evolves_to.length !== 0){
      let pokemonNombre2 = data.chain.evolves_to[0].species.name
      let pokemonImagen2 = await ObtenerImagen(pokemonNombre2)
      pokemonEvolucionArray.push([pokemonNombre2, pokemonImagen2])

      if(data.chain.evolves_to[0].evolves_to.length !== 0){
        let pokemonNombre3 = data.chain.evolves_to[0].evolves_to[0].species.name
        let pokemonImagen3 = await ObtenerImagen(pokemonNombre3)
        pokemonEvolucionArray.push([pokemonNombre3, pokemonImagen3])
      }
    }
    setPokemonsEvoluciones(pokemonEvolucionArray)
    console.log(pokemonEvolucionArray)
  }

  const ObtenerImagen = async (nombre) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const data = await response.json()
    return data.sprites.other['official-artwork'].front_default
  }

  const SiguienteId = () => {
    if(pokemonId>=535) return
    setPokemonId(pokemonId+1)
  }

  const AnteriorId = () => {
    if(pokemonId<=1) return
    setPokemonId(pokemonId-1)
  }

  useEffect(()=>{
    ObtenerListaCadenaEvolucion(pokemonId)
  },[pokemonId])

  return (
    <div className="evoluciones-contenedor">
      <h1>
        Cadenas Evolutivas
      </h1>

      <div className="botones">
        <button className="boton" onClick={AnteriorId}><FaArrowCircleLeft /></button>
        <button className="boton" onClick={SiguienteId}><FaArrowCircleRight/></button>
      </div>

      
      
      <div className="cadena-evolutiva">
        {pokemonsEvoluciones.map((pokemon, index)=>(
          <PokemonCartaEvolucion key={index} PokemonName={pokemon[0]} PokemonImage={pokemon[1]}  />
        ))}
      </div>


    </div>
  )
}

export default Evoluciones