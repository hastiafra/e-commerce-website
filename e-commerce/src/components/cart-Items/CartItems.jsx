import "./cartItems.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartItems.context";

const CartItems = ({ item }) => {

  const { cartItems, setCartItems } = useContext(CartContext);

  const removeItem = () => {
    const filteredId = cartItems.filter((cartItem) => {
      return cartItem.itemId !== item.itemId;
    });

    setCartItems(filteredId);
  };

  const increaseQuantity = () => {
    let checkItemId = cartItems.find((cartItem) => {
      return cartItem.itemId === item.itemId;
    });

    if (checkItemId) {
      const newQuantity = cartItems.map((cartItem) => {
        return cartItem.itemId === item.itemId
          ? { ...cartItem, itemQuantity: cartItem.itemQuantity + 1 }
          : cartItem;
      });

      setCartItems(newQuantity)
    }
  };

  const decreaseQuantity = () => {
    let itemExist = cartItems.find((cartItem) => {
      return cartItem.itemId === item.itemId;
    });

    if (itemExist.itemQuantity === 1) {
      let filteredItem = cartItems.filter((cartItem) => {
        return cartItem.itemId !== item.itemId;
      });

      setCartItems(filteredItem);
    } else {
      const newItem = cartItems.map((cartItem) => {
        return cartItem.itemId === item.itemId
          ? {
              ...cartItem,
              itemQuantity: cartItem.itemQuantity - 1,
            }
          : cartItem;
      });

      setCartItems(newItem);
    }
  };

  return (
    <div className="addedProductWrapper">
      <button onClick={removeItem} className="removeItemBtn">
        &#10005;
      </button>
      <img src={item.itemImg} className="cartImg" alt={item.itemName} />

      <div className="detailProduct">
        <p> {item.itemName}</p>
        <p>
          Price: ${item.itemPrice} x {item.itemQuantity}
        </p>
      </div>
      <div className="arrowControl">
        <button className="incrementBtn" onClick={increaseQuantity}>
          &#8710;
        </button>
        <button className="decrementBtn" onClick={decreaseQuantity}>
          &#8711;
        </button>
      </div>
    </div>
  );
};

export default CartItems;
