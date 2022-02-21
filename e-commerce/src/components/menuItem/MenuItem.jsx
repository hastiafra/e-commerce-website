import React from "react";
import Collection from "../collection/Collection";
import { useNavigate } from "react-router-dom";

import menuStyle from "./menuStyle.scss"

const MenuItem = ({ title,imageUrl, size}) => {

let navigate = useNavigate();

const seeDetail = (itemTitle) =>{
  
  navigate(`/shop/${itemTitle}`);
  
}




  return (
    <div className={`${size} menu-item`}>
  <div 
  style={{backgroundImage:`url(${imageUrl})`}} 
  className="backgroundImg"/>
      
      <button className="content" onClick={()=>seeDetail(title)}>
        <h1 className="title" >
          {title}
        </h1>
          <span className="subtitle">Shop Now</span>
      </button>
    </div>
  );
};

export default MenuItem;
