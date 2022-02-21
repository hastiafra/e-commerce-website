import React from "react";

const Collection = ({ name, imageUrl, price }) => {

  return (
    <>
      <h1>{name}</h1>
      <img src={imageUrl}></img>
      <h4>Price: {price}</h4>
    </>
  );
};

export default Collection;
