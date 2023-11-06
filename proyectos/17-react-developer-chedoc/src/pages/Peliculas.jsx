import Encabezado from "../components/Encabezado"
import PiePagina from "../components/PiePagina"
import Contenido from "../components/Contenido"

import sample from '../assets/data/sample.json'
import SerieElemento from "../components/SerieElemento"
import FiltroAño from "../components/FiltroAño"

import { useState, useEffect } from "react"

const Peliculas = () => {
  const [movies, setMovies] = useState([])
  const [año, setAño] = useState('all')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const OnChange = (value) => {
    const newYear = value
    setAño(newYear)
  }

  const getMovies = () => {
    try {
      setLoading(true)
      if(año === 'all') {
        const seriesNews = sample.entries.filter((item) => item.programType === 'movie' && item.releaseYear >= 2010).slice(0,20)
        .sort((a, b) => a.title.localeCompare(b.title))
        setMovies(seriesNews)
        console.log("all")
      }else{
        console.log(año)
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
        <FiltroAño OnChange={OnChange} />
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