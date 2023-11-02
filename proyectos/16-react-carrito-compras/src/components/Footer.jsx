import './Footer.css'
// import { useContext } from 'react'
// import ContextFilter from '../context/ContextFilter'
// import { ContextCart } from '../context/ContextCart'

const Footer = () => {
  // const filter = useContext(ContextFilter)
  // const contextCart = useContext(ContextCart)

  return (
    <div className='footer'>
      <h4>Prueba técnica de React - </h4>
      <span>Alvaro Neira Riveros</span>
      <h5>Carrito de Compras con useContext y useReducer</h5>
      {/* {JSON.stringify(contextCart.cart)} */}
    </div>
  )
}

export default Footer
