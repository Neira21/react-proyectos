import { useEffect, useState } from "react"

const Pokedex = () => {

  const [pokedex, setPokedex] = useState([])
  const [pokedexId, setPokedexId] = useState(1)
  const [pokemonList, setPokemonList] = useState([])

  const ObtenerPokedex = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${id}`)
    const data = await response.json()
    console.log(data.pokemon_entries)
    setPokedex(data.pokemon_entries)
    const pokemonArray = await ObtenerPokemon(40)
    setPokemonList(pokemonArray)
  }

  const ObtenerPokemon = (numerodepokemons) => {
    const pokemonArray = []
    for (let i = 1; i <= numerodepokemons; i++) {
      pokemonArray.push(pokedex[i])
    }
    return pokemonArray
  }


  useEffect(()=>{
    ObtenerPokedex(pokedexId)
  },[pokedexId])


  return (
    <div className="pokedex-container">
      <p>Pokedex</p>
      <p>
        {JSON.stringify(pokemonList)}
      </p>
    </div>
  )
}

export default Pokedex