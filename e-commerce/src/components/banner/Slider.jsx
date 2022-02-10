import React, { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import sliderStyle from "./sliderStyle.scss";

import { sliderItems } from "../../directory.data";

const Slider = () => {
  const [slideImg, setSlideImg] = useState(0);

  return (
    <div className="container">
      <div className="arrow">
        <ArrowLeftOutlined />
      </div>

      <div className="arrow">
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
