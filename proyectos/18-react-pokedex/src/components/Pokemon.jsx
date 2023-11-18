/* eslint-disable */

import { useState, useEffect } from "react"

const Pokemon = ({pokemon}) => {

  const [pokemonData, setPokemonData] = useState({})

  const ObtenerDatos = () => {
    fetch(pokemon.url)
    .then(response => response.json())
    .then(data => {
      setPokemonData(data)
    })
  }

  useEffect(()=>{
    ObtenerDatos()
  },[])
   

  
  return (
    <div className="pokemon-caja">
      <p>{pokemon.name}</p>
      <img src={pokemonData.sprites?.front_default} alt="" />
    </div>

  )
}

export default Pokemon