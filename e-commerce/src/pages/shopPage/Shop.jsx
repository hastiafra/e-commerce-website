import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collection from "../../components/collection/Collection";

const Shop = () => {

    const { titleId } = useParams();

    console.log(titleId)

  return (
    <>
      <Collection titleId={titleId} />
    </>
  );
};

export default Shop;
