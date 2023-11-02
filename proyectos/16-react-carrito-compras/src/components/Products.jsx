import './Products.css'
import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'

const Products = ({ products }) => {
  const constextCart = useContext(ContextCart)

  return (
    <ul className='product-list'>
      {products.map((product) => {
        return (
          <li className='product-card' key={product.id}>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-price'>${product.price}</p>
            <img className='product-img' src={product.thumbnail} alt={product.title} />
            <button onClick={() => constextCart.AddToCart(product)}>
              Agregar al carrito
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Products
