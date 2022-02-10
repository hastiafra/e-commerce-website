import React from "react";
import menuStyle from "./menuStyle.scss"

const MenuItem = ({ title,imageUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
  <div 
  style={{backgroundImage:`url(${imageUrl})`}} 
  className="backgroundImg"/>
      
      <div className="content">
        <h1 className="title">
          {title}
        </h1>
          <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
