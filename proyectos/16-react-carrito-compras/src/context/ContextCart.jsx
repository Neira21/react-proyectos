import { createContext, useReducer } from 'react'

export const ContextCart = createContext()

// Para usar el reducer, creamos el estado inicial y lo pasamos como segundo parámetro al useState
const initialState = []

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':{
      const productInCardIndex = state.findIndex((item) => item.id === payload.id)

      if (productInCardIndex === -1) {
        // Producto no está en el carrito
        return [
          ...state,
          { ...payload, quantity: 1 }
        ]
      }
      // Producto ya está en el carrito
      const newState = structuredClone(state)
      newState[productInCardIndex].quantity += 1
      return newState
    }
    case 'REMOVE_CART_ONE': {
      const productInCardIndex = state.findIndex((item) => item.id === payload.id)

      if (state[productInCardIndex].quantity === 1) {
        // acceder al caso REMOVE_OF_CART
        return state.filter((item) => item.id !== payload.id)
      }
      const newState = structuredClone(state)
      newState[productInCardIndex].quantity -= 1
      return newState
    }
    case 'REMOVE_OF_CART': {
      return state.filter((item) => item.id !== payload.id)
    }
    case 'CLEAN_CART': {
      return initialState
    }
  }
  return state
}

export const ContextCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  return (
    <ContextCart.Provider value={{ cart: state, AddToCart, RemoveCartOne, RemoveOfCart, CleanCart }}>
      {children}
    </ContextCart.Provider>
  )
}
