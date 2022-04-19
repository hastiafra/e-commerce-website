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

        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default CartItems;
