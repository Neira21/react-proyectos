import Products from './components/Products'
import Filter from './components/Filter'
import { useFilters } from './hooks/useFilters'
import { products } from '../mocks/info2.json'
import Footer from './components/Footer'
import CartPanel from './components/CartPanel'
import { ContextCartProvider } from './context/ContextCart'
import { useState } from 'react'
import ButtonCartPanel from './components/ButtonCartPanel'

const App = () => {
  const { filterProducts } = useFilters()
  const [productos] = useState(products)
  const filteredProducts = filterProducts(productos)

  // Ordernar por precio de menor a mayor
  const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price)

  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <ContextCartProvider>
      <div className='app'>
        <Filter />
        <Products products={sortedProducts} />
        <Footer />
        <ButtonCartPanel setCartOpen={setCartOpen} />
        <CartPanel isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </ContextCartProvider>
  )
}

export default App
