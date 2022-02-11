import React from "react";
import Directory from "../../components/directory/Directory";
import homeStyle from "./homeStyle.scss";
import Slider from "../../components/banner/Slider";

const Home = () => {
  return (
    <>
      <div className="slideWrapper">
        <Slider />
      </div>
      <div className="menu">
        <Directory />
      </div>
    </>
  );
};

export default Home;
