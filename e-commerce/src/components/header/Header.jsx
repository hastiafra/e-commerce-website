import React from "react";
import headerStyle from "./headerStyle.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/RemovedbgLogo.png";

const Header = () => {
  return (
    <div className="headerMenu">
      <Link to="/">
        <img className="headerLogo" src={logo} />
      </Link>
    </div>
  );
};
export default Header;
