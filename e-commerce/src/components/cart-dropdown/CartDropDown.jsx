import "./cartDropDown.styles.scss";
import { useContext} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "../cart-Items/CartItems";
import { CartContext } from "../../contexts/cartItems.context";

const CartDropDown = ({ setShow, show }) => {
  const handleClose = () => setShow(false);

  const { cartItems, cartTotal } = useContext(CartContext);

  console.log(cartTotal)

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="cartItems">
          {cartItems.length > 0
            ? cartItems.map((item) => {
                return <CartItems key={item.itemId} item={item} />;
              })
            : "Your shopping cart is empty"}
          <div className="checkOutWrapper">
            {cartItems.length > 0 ? (
              <button className="checkOutBtn">
                Check Out
                <p>$ {cartTotal}</p>
              </button>
            ) : (
              <button className="disabledBtn" disabled>
                Check Out
                <p>$0</p>
              </button>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartDropDown;
