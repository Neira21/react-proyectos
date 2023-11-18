import { Routes, Route } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import PokemonLista from './pages/PokemonLista'
import Evoluciones from './pages/Evoluciones'
import Inicio from './pages/Inicio'
import NavBar from './components/NavBar'
import './App.css'


const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/pokedex' element={<Pokedex/>} />
        <Route path='/evoluciones' element={<Evoluciones/>} />
        <Route path='/pokemonlista' element={<PokemonLista/>} />
      </Routes>
    </>
  )
}

export default App