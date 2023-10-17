import {BASE_URL} from '../constants/api'

export async function GetMovie(page){
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`)
    if(response.ok){
      const {results , total_pages } = await response.json()
      return {results, total_pages}
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