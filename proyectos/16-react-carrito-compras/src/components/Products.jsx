import './Products.css'
import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'
import { BsCartPlusFill } from 'react-icons/bs'
// import BsCartCheckFill from 'react-icons/bs'

const Products = ({ products }) => {
  const constextCart = useContext(ContextCart)

  const checkProductInCart = (product) => {
    return constextCart.cart.some(item => item.id === product.id)
  }

  return (
    <ul className='product-list'>
      {products.map((product) => {
        const isProductInCart = checkProductInCart(product)
        return (
          <li className='product-card' key={product.id}>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-price'>${product.price}</p>
            <img className='product-img' src={product.thumbnail} alt={product.title} />
            <button onClick={() => isProductInCart ? constextCart.RemoveOfCart(product) : constextCart.AddToCart(product)}>
              {
                isProductInCart
                  ? <BsCartPlusFill color='red' />
                  : <BsCartPlusFill color='green' />
              }
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Products
