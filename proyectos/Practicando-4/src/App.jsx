import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ListaElementos from './pages/ListaElementos'
import Todo from './pages/ToDo'
import Formulario from './pages/Formulario'


import 'bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom'
import TodoReducer from './components/todoReducer/TodoReducer'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listaelementos' element={<ListaElementos />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/todoreducer' element={<TodoReducer />} />

        
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
