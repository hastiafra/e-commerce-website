import "./cartItems.style.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cartItems.context";



const CartItems = () =>{

const {cartItems} = useContext(CartContext);



console.log(cartItems)
    return(
        <div>
            yourshopping
        </div>
    )
}


export default CartItems; 