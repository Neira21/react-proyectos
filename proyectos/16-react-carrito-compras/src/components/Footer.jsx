import './Footer.css'
import { useContext } from 'react'
import ContextFilter from '../context/ContextFilter'

const Footer = () => {
  const filter = useContext(ContextFilter)

  return (
    <div className='footer'>
      <h4>Prueba técnica de React - </h4>
      <span>Alvaro Neira Riveros</span>
      <h5>Carrito de Compras con useContext y useReducer</h5>
      {JSON.stringify(filter)}
    </div>
  )
}

export default Footer
