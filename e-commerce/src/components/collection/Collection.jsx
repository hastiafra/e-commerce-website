import React from "react";
import collectionStyle from "./collectionStyle.scss";
const Collection = ({ name, imageUrl, price }) => {
  return (
    <div className="wrapperCollection">
      <img className="img" src={imageUrl}></img>
      <div className="containerCollection">
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
      </div>
    </div>
  );
};

export default Collection;
