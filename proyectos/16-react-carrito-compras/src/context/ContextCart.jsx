import { createContext, useState } from 'react'

export const ContextCart = createContext()

export const ContextCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const AddToCart = (product) => {
    const productInCardIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCardIndex === -1) {
      // Producto no está en el carrito
      return setCart(prevState => ([...prevState, { ...product, quantity: 1 }]))
    }

    // Producto ya está en el carrito
    const newCart = structuredClone(cart)
    newCart[productInCardIndex].quantity += 1
    setCart(newCart)
  }

  const RemoveCartOne = (product) => {
    const productInCardIndex = cart.findIndex((item) => item.id === product.id)

    if (cart[productInCardIndex].quantity === 1) {
      return RemoveOfCart(product)
    }

    const newCart = structuredClone(cart)
    newCart[productInCardIndex].quantity -= 1
    setCart(newCart)
  }

  const RemoveOfCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
  }

  const CleanCart = () => {
    setCart([])
  }

  return (
    <ContextCart.Provider value={{ cart, AddToCart, RemoveCartOne, RemoveOfCart, CleanCart }}>
      {children}
    </ContextCart.Provider>
  )
}
