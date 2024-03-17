import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const removeCart = () => {
    setCart([]);
  };

  const value = { cart, setCart, removeCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
