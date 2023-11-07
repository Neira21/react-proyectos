import Encabezado from "../components/Encabezado"
import PiePagina from "../components/PiePagina"
import Contenido from "../components/Contenido"

import { useState, useEffect, useContext } from 'react'

import sample from '../assets/data/sample.json'
import SerieElemento from "../components/SerieElemento"
import FiltroAño from "../components/FiltroAño"
import CantidadResultados from "../components/CantidadResultados"
import { FiltroContext } from "../context/FiltroContext"

const Series = () => {

  const [series, setSeries] = useState([])
  const [cantidadResultados, setCantidadResultados] = useState(20)
  

  


  const {año} = useContext(FiltroContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const CambiarCantidadResultados = (e) => {
    setCantidadResultados(e)
  }
  
  const getSeries = () => {
    try {
      setLoading(true)
      if(año === 'all') {
        const seriesNews = sample.entries
        .filter((item) => item.programType === 'series' && item.releaseYear >= 2010)
        .slice(0,cantidadResultados)
        .sort((a, b) => a.title.localeCompare(b.title))
        setSeries(seriesNews)
      }else{
        console.log(año)
        const seriesNews = sample.entries
        .filter((item) => item.programType === 'series' && item.releaseYear == año)
        .splice(0,cantidadResultados)
        .sort((a, b) => a.title.localeCompare(b.title))
        setSeries(seriesNews)
      }
      
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(e)
    }
  }

  useEffect(()=> {
    getSeries()
    // eslint-disable-next-line
  },[año, cantidadResultados])

  return (
    <div>
      <Encabezado  />
      <Contenido title='Popular Series' >
        <CantidadResultados CantidadResultado={CambiarCantidadResultados} />

        <FiltroAño />
        {loading 
          ? <p style={{backgroundColor: 'red', fontSize:'150 px'}}>Cargando</p> 
          : <div className='contenedor-principal'>
              {series.map((item) => (
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

export default Series