import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import Series from './pages/Series'
import Peliculas from './pages/Peliculas'
import './pages/Inicio.css'
import { FiltroContextProvider } from './context/FiltroContext'

function App() {
  return (
    <FiltroContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/peliculas' element={<Peliculas/>} />
        </Routes>
      </BrowserRouter>
    </FiltroContextProvider>
  )
}

export default App
