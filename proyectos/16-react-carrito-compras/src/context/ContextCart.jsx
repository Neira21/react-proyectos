import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducer/CartReducer.js'

export const ContextCart = createContext()

// Para usar el reducer, creamos el estado inicial y lo pasamos como segundo parámetro al useState

export const ContextCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const AddToCart = (payload) => {
    dispatch({ type: 'ADD_TO_CART', payload })
  }

  const RemoveCartOne = (payload) => {
    dispatch({ type: 'REMOVE_CART_ONE', payload })
  }

  const RemoveOfCart = (payload) => {
    dispatch({ type: 'REMOVE_OF_CART', payload })
  }

  const CleanCart = () => {
    dispatch({ type: 'CLEAN_CART' })
  }

  // Un reducer recibe el estado actual y una acción y a partir de eso devuelve un nuevo estado
  // También para que el reducer funcione correctamente, el estado debe ser inmutable, por lo que no podemos hacer state.push()
  // Para eso, podemos usar el operador spread (...) o la función Object.assign()
  // Y por último, es más fácil relizar los test en el reducer

  return (
    <ContextCart.Provider value={{ cart: state, AddToCart, RemoveCartOne, RemoveOfCart, CleanCart }}>
      {children}
    </ContextCart.Provider>
  )
}
