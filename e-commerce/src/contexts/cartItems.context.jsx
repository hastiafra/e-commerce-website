import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
});

export const CartItemsProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  

  return (
    <CartContext.Provider value={{ setCartItems, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
