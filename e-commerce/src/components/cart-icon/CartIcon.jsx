import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIconStyle.scss";

const CartIcon = () => {
  return (
    <div className="cartIconWrapper">
      <ShoppingIcon className="cardIcon" />
      <p className="itemCount">10</p>
    </div>
  );
};

export default CartIcon;
