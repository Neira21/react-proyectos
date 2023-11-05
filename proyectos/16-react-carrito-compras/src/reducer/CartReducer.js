export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// Update LocalStorage with cart state
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':{
      const productInCardIndex = state.findIndex((item) => item.id === payload.id)

      if (productInCardIndex === -1) {
        // Producto no está en el carrito
        const newState = [
          ...state,
          { ...payload, quantity: 1 }
        ]
        updateLocalStorage(newState)
        return newState
      }
      // Producto ya está en el carrito
      // usando structuredClone que sirve para clonar objetos
      // Usar structureClone para cuando necesitamos clonar objetos y en este caso cambiar un valor de un objeto
      // En este ejemplo se usa para cambiar el valor de quantity aumentadolo en 1
      const newState = structuredClone(state)
      newState[productInCardIndex].quantity += 1

      // usando map
      // const newState = state.map((item) => {
      //   if (item.id === payload.id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }
      //   return item
      // })

      // usando spread operator y splice
      // const newState = [
      //   ...state.slice(0, productInCardIndex),
      //   {
      //     ...state[productInCardIndex],
      //     quantity: state[productInCardIndex].quantity + 1
      //   },
      //   ...state.slice(productInCardIndex + 1)
      // ]

      updateLocalStorage(newState)
      return newState
    }
    case 'REMOVE_CART_ONE': {
      const productInCardIndex = state.findIndex((item) => item.id === payload.id)

      if (state[productInCardIndex].quantity === 1) {
        // acceder al caso REMOVE_OF_CART
        const newState = state.filter((item) => item.id !== payload.id)
        updateLocalStorage(newState)
        return newState
      }
      const newState = structuredClone(state)
      newState[productInCardIndex].quantity -= 1
      updateLocalStorage(newState)
      return newState
    }
    case 'REMOVE_OF_CART': {
      const newState = state.filter((item) => item.id !== payload.id)
      updateLocalStorage(newState)
      return newState
    }
    case 'CLEAN_CART': {
      updateLocalStorage([])
      return []
    }
  }
  return state
}
