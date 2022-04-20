import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
});

export const CartItemsProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);


  useEffect(() => {
    let newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.itemQuantity * cartItem.itemPrice
    }, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]);


  return (
    <CartContext.Provider value={{ setCartItems, cartItems, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
