/* eslint-disable */

import Pokemon from "./Pokemon"
import { useEffect, useState } from "react"

const ContenedorPokemonLista = ({pokemonLista}) => {


  return (
    <div className='contenedor-pokemon'>
      {pokemonLista.map((pokemon)=> (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  )
}

export default ContenedorPokemonLista