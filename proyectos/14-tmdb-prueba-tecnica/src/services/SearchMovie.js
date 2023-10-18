import {BASE_URL} from '../constants/api'
import { MovieMapper } from '../mappers/MovieMapper'

export async function GetMovie(page1){
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&page=${page1}`)
    if(response.ok){
      const {results, page, total_pages, total_results } = await response.json()
      return {
        results: results.map(movie => MovieMapper(movie)), 
        page,
        total_pages,
        total_results
      }
    }
    return{
      error: true,
      message: 'No se pudo obtener la información',
      statusCode : response.status
    }

  } catch (error) {
    return {
      success: false,
      code: 500
    }
  }
  
}