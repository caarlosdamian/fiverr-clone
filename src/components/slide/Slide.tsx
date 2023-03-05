import React from "react";
// @ts-ignore
import Slider from "infinite-react-carousel";

import { CatCard } from "../catCard/CatCard";
import { cards } from "../../data";
import "./Slide.scss";

export const Slide = ({ slidesToShow, arrowsScroll, children }: any) => {
  return (
    <div className="slider">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
