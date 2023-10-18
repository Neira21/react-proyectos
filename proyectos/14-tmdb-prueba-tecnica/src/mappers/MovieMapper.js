import { IMG_URL } from '../constants/api'

export const MovieMapper = movieApiObject => {
  return {
    id: movieApiObject.id,
    title: movieApiObject.title,
    imagen: `${IMG_URL}${movieApiObject.poster_path}`,
    year: new Date(movieApiObject.release_date).getFullYear(),
    rating: movieApiObject.vote_average
  }
}