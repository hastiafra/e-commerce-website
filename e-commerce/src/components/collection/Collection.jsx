import React, { useContext, useState } from "react";
import collectionStyle from "./collectionStyle.scss";
import { CartContext } from "../../contexts/cartItems.context";

const Collection = ({ name, imageUrl, price, id }) => {
 

  const { setCartItems, cartItems } = useContext(CartContext);

  const findCartItem = () => {
    const existingCartItem = cartItems.find((item) => {
      return item.itemId === id;
    });

    if (existingCartItem) {
      return cartItems.map((existItem) => {
        return existItem.itemId === id
          ? { ...existItem, itemQuantity: existItem.itemQuantity + 1 }
          : existItem;
      });
    }

    return [
      ...cartItems,
      {
        itemId: id,
        itemPrice: price,
        itemName: name,
        itemImg: imageUrl,
        itemQuantity: 1,
      },
    ];
  };

  const addProductToCart = () => {
    setCartItems(findCartItem());
  };

  return (
    <div className="wrapperCollection">
      <img className="img" src={imageUrl}></img>
      <div className="containerCollection">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
      </div>
      <button onClick={addProductToCart}>Add to Card</button>
    </div>
  );
};

export default Collection;
