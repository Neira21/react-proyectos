function MovieList ({ movies }) {
  return(
    <ul className='PeliculaContent'>
      {movies.map(movie => (
        <li className='peliculaitem' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function NoMovieList () {
  return (
    <p>No se encontraron películas con esta búsqueda</p>
  )
}

export function Movies({ movies }){
  
  const hasMovies = movies?.length>0
  return(
      hasMovies 
        ? <MovieList movies={movies}/>
        : <NoMovieList/>
  )
}
