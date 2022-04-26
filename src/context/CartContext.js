import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const initialCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []; 

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart)

  useEffect(() => {
    localStorage.setItem('cart', 
      JSON.stringify(cart)
    )
  }, [cart]) 

  const addItem = (item) => {
    if (item.quantity > 0 && item.stock > 0) {
      setCart([...cart, item])
    }
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

  const updatePrice = (id, price) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        item.price = price
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
      editQuantity,
      updatePrice
    }}>
      {children}
    </CartContext.Provider>
  )
}