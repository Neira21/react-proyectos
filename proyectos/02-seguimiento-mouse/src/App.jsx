import { useState,useEffect } from 'react'


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  
  //pointer move
  useEffect(() => {
    console.log('useEffect')
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      console.log( 'handleMove', {clientX, clientY})
      setPosition({x:clientX, y:clientY})
    }
    if (enabled){
      window.addEventListener('pointermove', handleMouseMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
    }
  }, [enabled])


  //change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    
    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [enabled])


  return (
    <>
      <h1>Seguimiento de mouse</h1>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '50%',
        opacity:0.8,
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,

      }}>

      </div>
      
      <button onClick={()=>setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar' } seguir puntero
      </button>
    </>
  )
}

export default App
