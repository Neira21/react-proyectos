import { useState } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import { useFilters } from './hooks/useFilters'
import { products } from '../mocks/info.json'
import Footer from './components/Footer'

const App = () => {
  const { filterProducts } = useFilters()
  const [productos] = useState(products)

  const filteredProducts = filterProducts(productos)

  return (
    <div className='app'>
      <Filter />
      <Products products={filteredProducts} />
      <Footer />
    </div>
  )
}

export default App
