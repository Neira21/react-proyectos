/* eslint-disable react-hooks/exhaustive-deps */

import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch (){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if(search === ''){
      setError("No se puede buscar una película vacía")
      return
    }
    if(search.match(/^\d+$/)){
      setError("No se puede buscar un número")
      return
    }
    if(search.length < 3){
      setError("No se puede buscar menos de 3 caracteres")
      return
    }
    setError(null)

  },[search])

  return {search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, fetchMovie, loading} = useMovie({search, sort})

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      fetchMovie({ search })
    }, 300)
    , [fetchMovie]
  )

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchMovie({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    const {value} = e.target  
    updateSearch(value)
    debouncedGetMovies(value)
  }

  return (
    <>
      <header className='header'>
        <h2>APP MOVIE</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading 
          ? <p>Cargando...</p>
          :<Movies movies={movies}></Movies>
        }
        
      </main>
    </>
  )
}

export default App
