import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collection from "../../components/collection/Collection";

import SHOP_DATA from "../../data/shop.data";

const Shop = () => {
  const { titleId } = useParams();

  let clickedTitle = SHOP_DATA.filter((shop) => {
    return shop.routeName === titleId;
  });

  let itemArr = clickedTitle[0].items;

  let title = clickedTitle[0].title;

  return (
    <>
    <h1>{title}</h1>

      {itemArr.map(({ id, name, imageUrl, price }) => {
        return (
          <Collection key={id} name={name} imageUrl={imageUrl} price={price} />
        );
      })}
    </>
  );
};

export default Shop;
