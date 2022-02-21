import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collection from "../../components/collection/Collection";
import shopStyle from "./shopStyle.scss"

import SHOP_DATA from "../../data/shop.data";

const Shop = () => {
  const { titleId } = useParams();

  let clickedTitle = SHOP_DATA.filter((shop) => {
    return shop.routeName === titleId;
  });

  let itemArr = clickedTitle[0].items;

  let title = clickedTitle[0].title;

  return (
    <div className="wrapperShop">
      <h1 className="title">{title}</h1>
      <div className="containerShop">
        {itemArr.map(({ id, name, imageUrl, price }) => {
          return (
            <Collection
              key={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
