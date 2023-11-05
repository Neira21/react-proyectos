import { useEffect } from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'

const style = {
  container: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',
    flexDirection: 'column',
  }
}

const Lista = () => {
  const [movies, setMovies] = useState([])

  const ObtenerPeliculasRated = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/account/13007389/rated/movies?api_key=${import.meta.env.VITE_API_KEY}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODZlZTUyY2U2MGM5ZWJiMzgwNTEyN2RiNTNkN2Y2NyIsInN1YiI6IjYyYzBjYjE2NTMyYWNiMDMyOGQyNmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UbHOvXv3cT2bIHqz86uBHYGBj8VUyqB9PbCN477p9FM'
      }
    })
    const data = await response.json()
    setMovies(data.results)
  }

  useEffect(()=>{
    ObtenerPeliculasRated()
  },[])

  return (
    <div style={style.container}>
      <Link to='/' style={{textAlign:'center', textDecoration:'none'}}>
        <h1 style={{color:'white', cursor: 'pointer'}}>Regresar</h1>
      </Link>
      <ul>
        {movies.map((movie,index) => (
          <li key={index}>{movie.title} <span> {movie.rating}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default Lista