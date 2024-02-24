import { useEffect, useState } from "react"

const Foto = ({foto}) => {

  const [pokemonData, setPokemonData] = useState({})

  const ObtenerDatos = () => {
    fetch(foto.url)
    .then(response => response.json())
    .then(data => {
      setPokemonData(data)
    })
  }

  useEffect(()=>{
    ObtenerDatos()
  },[])

  return (
    <div className="foto_container" >
      <div className="foto_id_title">
        <p style={{textAlign:'center'}}>{foto.name}</p>
        <img style={{width:'250px'}}  src={pokemonData.sprites?.front_default} alt="" />
      </div>
    </div>
  )
}

export default Foto