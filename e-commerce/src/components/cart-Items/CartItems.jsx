import "./cartItems.style.scss";

const CartItems = ({ item }) => {


  return (
    <div className="addedProductWrapper">
      <img src={item.itemImg} className="cartImg" alt={item.itemName} />

      <div className="detailProduct">
        <p> Item Name: {item.itemName}</p>
        <p> Price: ${item.itemPrice} x {item.itemQuantity} </p>
      </div>
    </div>
  );
};

export default CartItems;
