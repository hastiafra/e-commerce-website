import React, { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from 'react-icons/io';

import {MdOutlineArrowForwardIos} from "react-icons/md"

import sliderStyle from "./sliderStyle.scss";

import { sliderItems } from "../../directory.data";

const Slider = () => {
  const [slideImg, setSlideImg] = useState(0);

  return (
    <div className="container">
      <div className="arrowRight">
        <IoIosArrowDroprightCircle color="white" fontSize="40px"/>
      </div>

      <div className="wrapper">
        {sliderItems.map(({ imageUrl, id }) => {
          return (
            <div key={id} className="wrapper">
              <img src={imageUrl} alt="" className="bannerImg" />
            </div>
          );
        })}
      </div>

      <div className="arrowLeft">
        <IoIosArrowDropleftCircle color="white" fontSize="40px"/>
      </div>
    </div>
  );
};

export default Slider;
