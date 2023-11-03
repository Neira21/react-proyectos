import './Filter.css'
import { useContext } from 'react'
import ContextFilter from '../context/ContextFilter'

const Filter = () => {
  const { filter, setFilter } = useContext(ContextFilter)
  const handleChangePrice = (e) => {
    setFilter({
      ...filter,
      price: e.target.value
    })
  }

  return (
    <div className='principal-filter-container'>
      <div className='filter-container'>
        <div className='filter-price'>
          <label htmlFor='price'>
            Precio mínimo
          </label>
          <input id='price' type='range' min='0' max='1000' onChange={handleChangePrice} value={filter.price} />
          {filter.price}
        </div>

        <div className='filter-search'>
          <label htmlFor='search'>
            Búsqueda
          </label>
          <input
            id='search'
            type='text'
            placeholder='Escribe un producto'
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </div>

        <div className='filter-category'>
          <label htmlFor='category'>
            Categoría
          </label>
          <select id='category' onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
            <option value='all'>Todos</option>
            <option value='home-decoration'>Home-decoration</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>Smartphones</option>
            <option value='fragrances'>Fragrances</option>
            <option value='skincare'>Skincare</option>
            <option value='groceries'>Groceries</option>
          </select>
        </div>
      </div>
    </div>

  )
}

export default Filter
