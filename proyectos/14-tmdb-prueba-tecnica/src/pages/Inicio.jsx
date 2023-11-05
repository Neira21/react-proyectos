import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'
import Pelicula from '../components/Pelicula'
import {GetMovie} from '../services/SearchMovie'
import { Link } from 'react-router-dom'

const getMovies = async (page1, setMovies, setLoading) => {
  setLoading(true)
  const {results}  = await GetMovie(page1)

  setMovies(results)
  setLoading(false)
}
function Inicio() {
  const [movies, setMovies] = useState([])
  const [page1, setPage1] = useState(1)
  
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getMovies(page1, setMovies, setLoading)
  },[page1])
  
  if(loading) return <h1>Cargando...</h1>

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      
        <Link to='/lista' style={{textAlign:'center', textDecoration:'none'}}>
          <h1 style={{color:'white', cursor: 'pointer'}}>Lista de películas valoradas</h1>
        </Link>
      
        
      <div className='buttons'>
        {page1 == 1 

          ? <button className='button' onClick={()=> setPage1(prevPage => prevPage+1)} >Mostrar siguientes</button> 
          : <> 
            <button className='button' onClick={()=> setPage1(prevPage => prevPage-1)} >Mostrar anteriores</button>
            <button className='button' onClick={()=> setPage1(prevPage => prevPage+1)} >Mostrar siguientes</button> 
            </>
        }
      </div>
      <div className='app'>
        {movies.map((movie) => (
          <Pelicula key={movie.id} movie={movie} />
          )) }
      </div>
    </div>
  )
}

export default Inicio
