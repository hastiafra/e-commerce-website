import React, { useState } from "react";

import sections from "../../data/directory.data";
import MenuItem from "../menuItem/MenuItem";

import directoryStyle from "./directoryStyle.scss";

const Directory = () => {
  return (
    <div className="directoryMenu">
      {sections.map(({ title, imageUrl, id, size }) => {
        return (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
};

export default Directory;
