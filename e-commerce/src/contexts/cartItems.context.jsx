import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartItemsProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const findCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingCartItem) {
      return( cartItems.map((cartItem) => {
        return cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      }))
    }

    return [...cartItems, { ...product, quantity: 1 }];
  };

  const addItemToCart = (product) => {
    setCartItems(findCartItem(cartItems, product));
  };

  return (
    <CartContext.Provider value={{ addItemToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
