const API_URL = 'https://omdbapi.com/'
const API_KEY = 'ce6a0e6f'

export const searchMovies = async ({search}) => {
  if(search===''){
    return null
  }
  try {
    const moviesfetch = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
    const moviesJson = await moviesfetch.json()
    const movies = moviesJson.Search
    
    return movies?.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      id: movie.imdbID
      }
    })
  } catch (error) {
    throw new Error('Error al obtener los datos')   
  }
}