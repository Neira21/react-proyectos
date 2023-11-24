import { useState } from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EntradaSalida from './pages/EntradaSalida'
import Reportes from './pages/Reportes'
import Usuarios from './pages/Usuarios'
import Inventario from './pages/Inventario';
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/inventario/' element={<Inventario/>} />
      <Route path='/entradasalida' element={<EntradaSalida/>} />
      <Route path='/reportes' element={<Reportes/>} />
      <Route path='/usuarios' element={<Usuarios/>} />
    </Routes>
  )
}

export default App



