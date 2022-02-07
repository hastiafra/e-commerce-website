import React from "react";
import menuStyle from "./menuStyle.scss"

const MenuItem = ({ title }) => {
  return (
    <div className="menu-item">
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
