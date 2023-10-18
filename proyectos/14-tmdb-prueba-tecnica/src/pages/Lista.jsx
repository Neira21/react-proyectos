import { useEffect } from "react"
import { useState } from "react"

const style = {
  container: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '50px',
    flexColumn: 'column',
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
      <ul>
        {movies.map((movie,index) => (
          <li key={index}>{movie.title} <span> {movie.rating}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default Lista