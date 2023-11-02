import { createContext, useState } from 'react'

const ContextFilter = createContext()

export default ContextFilter

const ContextFilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    search: '',
    category: 'all',
    price: 0
  })
  return (
    <ContextFilter.Provider value={{ filter, setFilter }}>
      {children}
    </ContextFilter.Provider>
  )
}

export { ContextFilterProvider }
