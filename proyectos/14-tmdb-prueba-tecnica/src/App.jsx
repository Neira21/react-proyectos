import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Lista from './pages/Lista'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/lista' element={<Lista/>} />
        </Routes>
      </BrowserRouter>
      
    </main>
  )
}

export default App
