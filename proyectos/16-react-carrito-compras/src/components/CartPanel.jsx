// CartPanel.js
import './CartPanel.css'
import { useContext, useEffect, useState } from 'react'
import { ContextCart } from '../context/ContextCart'
import { BsCartXFill } from 'react-icons/bs'

function CartPanel ({ isOpen, onClose }) {
  const { cart, AddToCart, RemoveCartOne, RemoveOfCart, CleanCart } = useContext(ContextCart)
  const [total, setTotal] = useState(0)
  const CalcularTotalPrecio = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.quantity
    })
    setTotal(total)
  }

  useEffect(() => {
    CalcularTotalPrecio()
  }, [cart])

  return (
    <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Cerrar</button>
      <button onClick={CleanCart}>Limpiar Carrito</button>
      <ul>
        {cart.map((product) => {
          return (
            <li key={product.id} className='cart-element'>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>Precio {product.price}</p>
                <p>Cantidad {product.quantity}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button onClick={() => AddToCart(product)}>+</button>
                <button onClick={() => RemoveCartOne(product)}>-</button>
                <button onClick={() => RemoveOfCart(product)}>
                  <BsCartXFill />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      <h2>Total: {total} $</h2>
    </div>
  )
}

export default CartPanel
