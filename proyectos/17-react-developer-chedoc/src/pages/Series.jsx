import Encabezado from "../components/Encabezado"
import PiePagina from "../components/PiePagina"
import Contenido from "../components/Contenido"

import { useState, useEffect } from 'react'

import sample from '../assets/data/sample.json'
import SerieElemento from "../components/SerieElemento"
import FiltroAño from "../components/FiltroAño"

const Series = () => {
  const [series, setSeries] = useState([])
  const [año, setAño] = useState('all')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const OnChange = (value) => {
    const newYear = value
    setAño(newYear)
  }
  
  const getSeries = () => {
    try {
      setLoading(true)
      if(año === 'all') {
        const seriesNews = sample.entries.filter((item) => item.programType === 'series' && item.releaseYear >= 2010).slice(0,20)
        .sort((a, b) => a.title.localeCompare(b.title))
        setSeries(seriesNews)
        console.log("all")
      }else{
        console.log(año)
        const seriesNews = sample.entries.filter((item) => item.programType === 'series' && item.releaseYear == año).splice(0,20)
        .sort((a, b) => a.title.localeCompare(b.title))
        setSeries(seriesNews)
      }
      
      setLoading(false)
    } catch (e) {
      setError(e)
    }
    
  }

  useEffect(()=> {
    getSeries()
    // eslint-disable-next-line
  },[año])

  return (
    <div>
      <Encabezado  />
      <Contenido title='Popular Series' >
        <FiltroAño OnChange={OnChange} />
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