import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useState, useContext, useEffect } from "react";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { CartContext } from "../../contexts/cartItems.context";

import "./cartIconStyle.scss";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const [cartCount, setCartCount] = useState(0);

  const handleShow = () => setShow(true);

  useEffect(() => {
    let newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.itemQuantity;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  return (
    <div className="cartIconWrapper">
      <button onClick={handleShow}>
        <ShoppingIcon className="cardIcon" />

        <p className="itemCount">{cartCount}</p>
      </button>
      <CartDropDown setShow={setShow} show={show} />
    </div>
  );
};

export default CartIcon;
