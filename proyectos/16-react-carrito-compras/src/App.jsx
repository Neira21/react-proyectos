import { useState } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import { useFilters } from './hooks/useFilters'
import { products } from '../mocks/info.json'
import Footer from './components/Footer'
import CartPanel from './components/CartPanel'
import { BsFillCartFill } from 'react-icons/bs'
import { ContextCartProvider } from './context/ContextCart'
const App = () => {
  const { filterProducts } = useFilters()
  const [productos] = useState(products)

  const filteredProducts = filterProducts(productos)

  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <ContextCartProvider>
      <div className='app'>
        <Filter />
        <Products products={filteredProducts} />
        <Footer />
        <button className='button-cart' onClick={() => setCartOpen(true)}>
          <BsFillCartFill /> <span>1</span>
        </button>
        <CartPanel isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </ContextCartProvider>
  )
}

export default App
