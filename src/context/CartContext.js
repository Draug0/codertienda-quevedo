import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc += item.amount, 0)
  }

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc += item.amount * item.price, 0)
  }

  const editAmount = (id, amount) => {
    setCart(cart.map(item => {
      if (item.id === id && amount <= item.stock && amount > 0) {
        item.amount = amount
        return item
      } else {
        return item
      }
    }))
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }
  
  const clearCart = () => {
    setCart([])
  }
  
  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      isInCart,
      cartQuantity,
      cartTotal,
      clearCart,
      removeItem,
      editAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}