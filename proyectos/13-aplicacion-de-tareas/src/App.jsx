import './App.css'
import TareaContenedor from './components/TareaContenedor'
import TareaInput from './components/TareaInput'

function App() {
  return (
    <div className='app'>
      <h1>Lista de Tareas</h1>
      <TareaInput />
      <TareaContenedor />
    </div>
  )
}

export default App
