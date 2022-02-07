import React, { useState } from "react";

import sections from "../../directory.data";
import MenuItem from "../menuItem/MenuItem";

const Directory = () => {


  return (
    <>
      {sections.map(({ title, imageUrl, id }) => {
       return( <MenuItem key={id} title={title} imageUrl={imageUrl}/>);
      })}
    </>
  );
};

export default Directory;
