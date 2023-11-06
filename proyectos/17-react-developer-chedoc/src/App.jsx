import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import Series from './pages/Series'
import Peliculas from './pages/Peliculas'
import './pages/Inicio.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/series' element={<Series/>} />
        <Route path='/peliculas' element={<Peliculas/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
