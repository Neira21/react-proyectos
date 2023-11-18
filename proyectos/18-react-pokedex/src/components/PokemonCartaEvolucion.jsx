/* eslint-disable */

const PokemonCartaEvolucion = ({PokemonName, PokemonImage}) => {
  return (
    <div className='pokemon-card'>
      <img src={PokemonImage} alt={PokemonName} height={250} width={300} />
      <h3>{PokemonName}</h3>
    </div>
  )
}

export default PokemonCartaEvolucion