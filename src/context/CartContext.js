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

  const cartQuantityTotal = () => {
    return cart.reduce((acc, item) => acc += item.quantity, 0)
  }

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
  }

  const editQuantity = (id, quantity) => {
    setCart(cart.map(item => {
      if (item.id === id && quantity <= item.stock && quantity > 0) {
        item.quantity = quantity
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
      cartQuantityTotal,
      cartTotal,
      clearCart,
      removeItem,
      editQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}