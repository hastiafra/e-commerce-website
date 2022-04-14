import "./cartDropDown.styles.scss";
import Offcanvas from "react-bootstrap/Offcanvas";

const CartDropDown = ({ setShow, show }) => {

 const handleClose = () => setShow(false);


  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="cartItems">
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.

          <button className="checkOutBtn">Check Out</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartDropDown;
