import { products } from '../mocks/info.json'
import { useEffect, useState } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'

const App = () => {
  const [productos, setProductos] = useState(products)
  const [filter, setFilter] = useState({
    search: '',
    category: 'all',
    price: 0
  })

  const changeFilter = (filtro) => {
    setFilter(filtro)
  }

  const filterProducts = (products) => {
    return products.filter((product) => {
      return product.price > filter.price && (
        filter.category === 'all' ||
        product.category === filter.category
      ) && product.title.toLowerCase().includes(filter.search.toLowerCase())
    })
  }

  const filteredProducts = filterProducts(products)

  const Obtenerresultados = () => {
    setProductos(filteredProducts)
  }

  useEffect(() => {
    Obtenerresultados()
  }, [filter])

  return (
    <div className='app'>
      <Filter changeFilter={changeFilter} />
      <Products products={productos} />
    </div>
  )
}

export default App
