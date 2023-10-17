import {BASE_URL} from '../constants/api'

export async function GetMovie(page){
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`)
    if(response.ok){
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
  
}