import Encabezado from "../components/Encabezado"
import PiePagina from "../components/PiePagina"
import Contenido from "../components/Contenido"

import sample from '../assets/data/sample.json'
import SerieElemento from "../components/SerieElemento"
import FiltroAño from "../components/FiltroAño"
import { FiltroContext } from "../context/FiltroContext"
import { useState, useEffect, useContext } from "react"

const Peliculas = () => {

  const {año} = useContext(FiltroContext)
  const [movies, setMovies] = useState([])
  

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const getMovies = () => {
    try {
      setLoading(true)
      if(año === 'all') {
        const seriesNews = sample.entries.filter((item) => item.programType === 'movie' && item.releaseYear >= 2010).slice(0,20)
        .sort((a, b) => a.title.localeCompare(b.title))
        setMovies(seriesNews)
      }else{
        const seriesNews = sample.entries.filter((item) => item.programType === 'movie' && item.releaseYear == año).splice(0,20)
        .sort((a, b) => a.title.localeCompare(b.title))
        setMovies(seriesNews)
      }
      
      setLoading(false)
    } catch (e) {
      setError(e)
    }
    
  }

  useEffect(()=> {
    getMovies()
    // eslint-disable-next-line
  },[año])
  return (
    <div>
      <Encabezado />
        <Contenido title='Popular Movies ' >
        <FiltroAño />
          {loading 
            ? <p>Loading</p>
            : <div className='contenedor-principal'>
                {movies.map((item) => (
                  <SerieElemento item={item} key={item.title} />
                ))}
              </div>
          }
          {error && <p>{error.message}</p>}
        </Contenido>
      <PiePagina />
    </div>
  )
}

export default Peliculas