/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {createContext, useContext, useEffect, useState} from 'react'

const AppContext = createContext({
  items:[],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (id, item) => {},
  deleteItem: (id) => {}
})

export const Store = ({children}) => {

  const [items, setItems] = useState([])
  const createItem = (item) => {
    const tem = [...items]
    tem.push(item)
    setItems(tem)
  }

  const getItem = (id) => {
    const tem = [...items]
    const item = tem.find(item => item.id === id)
    return item
  }

  const updateItem = (id, item) => {
    const index = items.findIndex(i => i.id === id)
    const tem = [ ...items ]
    tem[index] = { ...item }
  }

  const deleteItem = (id) => {
    const tem = items.filter(item => item.id !== id)
    setItems(tem)
  }

  return (
    <AppContext.Provider value={{
      items,
      createItem,
      getItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext)