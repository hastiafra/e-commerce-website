import React from "react";
import collectionStyle from "./collectionStyle.scss"
const Collection = ({ name, imageUrl, price }) => {

  return (
    <div className="wrapperCollection">
      <h1>{name}</h1>
      <img className="img" src={imageUrl}></img>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default Collection;
