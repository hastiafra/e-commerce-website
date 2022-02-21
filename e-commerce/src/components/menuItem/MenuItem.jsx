import React from "react";
import Collection from "../collection/Collection";
import { useParams } from "react-router-dom";

import menuStyle from "./menuStyle.scss"

const MenuItem = ({ title,imageUrl, size}) => {

 

const seeDetail = (itemTitle) =>{
   console.log(itemTitle)

  // titleId === itemTitle

  // console.log(titleId)
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
