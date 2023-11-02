import { useContext } from 'react'

import ContextFilter from '../context/ContextFilter'

export const useFilters = () => {
  const { filter, setFilter } = useContext(ContextFilter)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return product.price > filter.price &&
        (filter.category === 'all' ||
        product.category === filter.category) &&
        product.title.toLowerCase().includes(filter.search.toLowerCase())
    })
  }
  return {
    filter, setFilter, filterProducts
  }
}
