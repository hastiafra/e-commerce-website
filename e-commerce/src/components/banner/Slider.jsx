import React, { useState, useEffect } from "react";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import sliderStyle from "./sliderStyle.scss";

import { sliderItems } from "../../data/directory.data";

const Slider = () => {
  const [slideImg, setSlideImg] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const autoPlay = () => {
    setTimeout(() => {
      setSlideImg(slideImg === sliderItems.length - 1 ? 0 : slideImg + 1);
    }, 3000);
  };

  const getScreenWidth = () => {
    setWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    if (width < 900) {
      autoPlay();
    }
    return () => window.removeEventListener("resize", getScreenWidth);
  });

  const nextSlide = () => {
    setSlideImg(slideImg === sliderItems.length - 1 ? 0 : slideImg + 1);
  };

  const previousSlide = () => {
    setSlideImg(slideImg === 0 ? sliderItems.length - 1 : slideImg - 1);
  };

  return (
    <>
      <div className="arrowRight" direction="right" onClick={nextSlide}>
        <IoIosArrowDroprightCircle className="iconRight" fontSize="60px" style={{ stroke: "gray", strokeWidth: "10"}}/>
      </div>

      {sliderItems.map(({ imageUrl, id }, index) => {
        return (
          <div className={index === slideImg ? "activeSlide" : "slide"}>
            {index === slideImg && (
              <img
                key={id}
                src={imageUrl}
                alt="fashion image"
                className="bannerImg"
              ></img>
            )}
          </div>
        );
      })}

      <div className="arrowLeft" direction="left">
        <IoIosArrowDropleftCircle
          fontSize="60px"
          className="iconLeft"
          style={{ stroke: "gray", strokeWidth: "10"}}
          onClick={previousSlide}
        />
      </div>
    </>
  );
};

export default Slider;
