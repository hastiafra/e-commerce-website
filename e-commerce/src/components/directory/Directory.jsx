import React, { useState } from "react";

import sections from "../../directory.data";
import MenuItem from "../menuItem/MenuItem";

import directoryStyle from "./directoryStyle.scss"

const Directory = () => {


  return (
    <div className="directoryMenu">
      {sections.map(({ title, imageUrl, id }) => {
       return( <MenuItem key={id} title={title} imageUrl={imageUrl}/>);
      })}
    </div>
  );
};

export default Directory;
