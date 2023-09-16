import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/Movies'


export function useMovie({search, sort}){

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)
  
  const fetchMovie = useCallback(
    async ({search}) => {
      if(previusSearch.current === search) return
      try{
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({search})    
        setMovies(newMovies)
      }catch(error){
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }
  ,[])
  
  
  
  const sortedMovies = useMemo(()=>{
    return sort 
      ? [...movies].sort((a, b)=> a.title.localeCompare(b.title))
      : movies
  },[movies, sort])



  return({ movies: sortedMovies, fetchMovie, loading, error } )
}