import Foto from './Foto'
import { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'


const ListaFotos = () => {

  const [fotosList, setFotosList] = useState([])
  const [cantidad, setCantidad] = useState(20)
  

  useEffect(()=>{
    const fetchFotos = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`)
      const data = await response.json()
      setFotosList(data.results)
    }
    fetchFotos()
  },[cantidad])

  const aumentarCantidad = () => {
    setCantidad(cantidad + 20)
  }
  

  return (
    <div>
      <h1>Lista de fotos</h1>
      <div className='fotos_container'>
        <InfiniteScroll
          dataLength={fotosList.length}
          next={aumentarCantidad}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          className='fotos_container'
        >
          {fotosList.map((foto) => 
            <Foto key={foto.name} foto={foto}></Foto>
          )}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default ListaFotos