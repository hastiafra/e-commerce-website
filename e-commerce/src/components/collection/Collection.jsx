import React from "react";
import collectionStyle from "./collectionStyle.scss";
const Collection = ({ name, imageUrl, price }) => {
  return (
    <div className="wrapperCollection">
      <img className="img" src={imageUrl}></img>
      <div className="containerCollection">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
      </div>
      <button>Add to Card</button>
    </div>
  );
};

export default Collection;
