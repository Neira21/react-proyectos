import './Products.css'

const Products = ({ products }) => {
  return (
    <ul className='product-list'>
      {products.map((product) => {
        return (
          <li className='product-card' key={product.id}>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-price'>${product.price}</p>
            <img className='product-img' src={product.thumbnail} alt={product.title} />
          </li>
        )
      })}
    </ul>
  )
}

export default Products
