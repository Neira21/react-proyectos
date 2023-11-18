import { useState, useEffect } from 'react'
import ContenedorPokemonLista from '../components/ContenedorPokemonLista'

const PokemonLista = () => {

  const [pokemonLista, setPokemonLista] = useState([])
  
  const obtenerListaPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    setPokemonLista(data.results)
  }

  useEffect(() => {
    obtenerListaPokemon()
  },[])

  return (
    <div className='app'>
      <h1>Mundo Pokemon</h1>
      <ContenedorPokemonLista pokemonLista={pokemonLista} />
    </div>
  )
}

export default PokemonLista
