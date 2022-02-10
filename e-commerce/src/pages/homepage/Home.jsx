import React from "react";
import Directory from "../../components/directory/Directory"
import homeStyle from "./homeStyle.scss";
import Slider from "../../components/banner/Slider";

const Home = () =>{

return(
    <>
    <div className="homePage">
    <Slider/>
    <Directory/>
    </div>
    </>
)


}

export default Home;