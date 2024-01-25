import { useEffect, useState } from "react"
import {BASE_URL, IMG_URL} from "../Constans.js"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const apiKey = '786ee52ce60c9ebb3805127db53d7f67'
  const [page, setPage] = useState(1)

  useEffect(()=> {
    const getMovies = () => {
      fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
    }
    getMovies()
  },[page])

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies.map(movie => (
        <div key={movie.id} className='w-[200px] flex flex-col items-center justify-center'>
          <h2 className="min-h-16" >{movie.title}</h2>
          <img className="m-auto" src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}/>
        </div>
      ))}
    </div>
  )
}

export default Movies