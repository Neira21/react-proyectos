import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Movies from './pages/Movies'
import Todo from './pages/Todo'
import NotFound from './pages/NotFound'
import Acerca from './pages/Acerca'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Acerca/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
