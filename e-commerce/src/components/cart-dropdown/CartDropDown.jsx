import "./cartDropDown.styles.scss";
import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "../cart-Items/CartItems";
import { CartContext } from "../../contexts/cartItems.context";

const CartDropDown = ({ setShow, show }) => {
  const handleClose = () => setShow(false);

  const {cartItems} = useContext(CartContext)


  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="cartItems">
          {cartItems.map((item)=>{
            <CartItems key={item.id}cartItem={item}/>
          })}
          <button className="checkOutBtn">Check Out</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartDropDown;
