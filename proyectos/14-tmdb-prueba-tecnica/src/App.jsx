import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Pelicula from './components/Pelicula'
import {GetMovie} from './services/SearchMovie'

const getMovies = async (page, setMovies, setLoading) => {
  setLoading(true)
  const {results, total_pages}  = await GetMovie(page)
  setMovies(results)
  setLoading(false)
}

function App() {

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getMovies(page, setMovies, setLoading)
  },[page])

  if(loading) return <h1>Cargando...</h1>

  return (
    <>
      <div className='button'>
        <button onClick={()=> setPage(prevPage => prevPage+1)} >Mostrar siguientes</button>
      </div>
      <div className='app'>
        {movies.map((movie) => (
          <Pelicula key={movie.id} movie={movie} />
          )) }
      </div>
    </>
  )
}

export default App
