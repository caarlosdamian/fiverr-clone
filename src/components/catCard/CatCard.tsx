import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

export const CatCard = ({ item }: any) => {
  return (
    <Link to={"/gigs?cat=desing"}>
      <div className="carCard">
        <img src={item.img} alt="item-img" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};
