import { BsFillCartFill } from 'react-icons/bs'
import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'

const ButtonCartPanel = (props) => {
  const context = useContext(ContextCart)
  return (
    <button className='button-cart' onClick={() => props.setCartOpen(true)}>
      <BsFillCartFill /> <span>{context.cart.length}</span>
    </button>
  )
}

export default ButtonCartPanel
