import { useMemo, useState } from "react"

const CalculosPesados = () => {

  const [listaNumeros, setListaNumeros] = useState([2,3,4,5,6,7,8,9])
  const [show, setShow] = useState(true)

  const getCalculo = (listaNumeros) => useMemo(() => {
    console.log("Calculando...")
    return listaNumeros.reduce((a,b) => a*b)
  }, [listaNumeros])

  const agregarNumero = () => {
    setListaNumeros(prev => {
      const nuevoNumero = prev[prev.length-1] + 1
      const nuevaLista = [...prev, nuevoNumero]
      console.log(nuevaLista)
      return nuevaLista
    })
  }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',margin:'auto', width:'80%'}}>
      <h2>Calculo: </h2>
      
      <p>{getCalculo(listaNumeros)}</p>

    <div style={{display:"flex", gap:'20px'}}>
      <button onClick={() => setShow(!show)}>{ show ? 'Show' : 'Hide'}</button>
      <button onClick={() => agregarNumero()}>Agregar numeros</button>
      {/* BOTON PARA ACTUALIZAR PAGINA */}
      <button onClick={() => window.location.reload()}>Actualizar</button>
      
    </div>

    </div>
  )
}

export default CalculosPesados