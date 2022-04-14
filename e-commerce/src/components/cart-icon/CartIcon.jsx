import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useState } from "react";
import CartDropDown from "../cart-dropdown/CartDropDown";

import "./cartIconStyle.scss";

const CartIcon = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div className="cartIconWrapper">
      <button onClick={handleShow}>
        <ShoppingIcon className="cardIcon" />
        <p className="itemCount">10</p>
      </button>
      <CartDropDown setShow={setShow} show={show} />
    </div>
  );
};

export default CartIcon;
