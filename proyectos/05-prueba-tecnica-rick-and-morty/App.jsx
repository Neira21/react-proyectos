import './style.css'
import { useCharacter } from './hooks/useCharacter'
import { useEffect, useState } from 'react'
import Character from './components/Character'
import Navigation from './components/Navigation'

const App = () => {
  const [status, setStatus] = useState('')
  const { characters, info, loading, fetchCharacters } = useCharacter()

  const GetCharacter = () => {
    fetchCharacters({ status })
  }

  const handleSelectChange = (e) => {
    e.preventDefault()
    setStatus(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchCharacters({ status })
  }

  const HandleNext = () => {
    if (info.next === null) return
    fetchCharacters({ infoNext: info })
  }

  const handlePrev = (e) => {
    if (info.prev === null) return
    fetchCharacters({ infoPrev: info })
  }

  useEffect(() => {
    GetCharacter()
  }, [status])

  return (
    <main className='bg-success'>
      <div className='title'>API RICK AND MORTY</div>
      <section className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <select onChange={handleSelectChange}>
            <option value=''>Todos</option>
            <option value='Alive'>Vivo</option>
            <option value='Dead'>Muerto</option>
            <option value='unknown'>Desconocido</option>
          </select>
          <button className='primary' type='submit'>Buscar</button>
        </form>
        <Navigation handlePrev={handlePrev} HandleNext={HandleNext} />
        {loading
          ? <p>Cargando...</p>
          : <Character characters={characters} />}
        <Navigation handlePrev={handlePrev} HandleNext={HandleNext} />
      </section>
    </main>
  )
}
export default App
