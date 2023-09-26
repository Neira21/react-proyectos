import './App.css'
import Boton from './components/Boton'
import Contador from './components/Contador'
import { useState, useEffect } from 'react'

function App() {
  const [numeroClicks, setNumeroClicks] = useState(0) 
  const [contador, setContador] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(3); // Tiempo en segundos

  useEffect(() => {
    if (contador && tiempoRestante > 0) {
      const timer = setTimeout(() => {
        setTiempoRestante(tiempoRestante - 1);
      }, 1000); // Restar 1 segundo

      return () => {
        clearTimeout(timer);
      };
    } else if (tiempoRestante === 0) {
      setContador(false)
      alert(`Se acabó el tiempo.`)
    }
  }, [contador, tiempoRestante]);

  const handleStartClick = () => {
    setNumeroClicks(0);
    setTiempoRestante(3); // Reinicia el tiempo en segundos
    setContador(true);
  };

  const botonClick = () => {
    if (contador) {
      setNumeroClicks(numeroClicks + 1);
    }
  };

  const botonReinicio = () => {
    console.log('Reinicio')
    setNumeroClicks(0)
  }

  return (
    <>

    {console.log(contador)}
      <div className='app'>
        <div className='titulo'>
            <h1>Contador de Clicks</h1> 
            <p>Tiempo restante: {tiempoRestante} segundos</p>
        </div>
        <div className='contenedor-principal'>  
          <Contador>
            {numeroClicks}
          </Contador>
          <div className='botones'>
            {contador
              ? (<Boton texto='Hacer Click' esContador={true} manejarClick={botonClick} />) 
              : (<Boton texto='Iniciar' esContador={true} manejarClick={handleStartClick} />
            )}
            
            <Boton texto='Reiniciar' esContador={false} manejarClick={botonReinicio} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
