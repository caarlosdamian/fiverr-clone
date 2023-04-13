import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

export const GigCard = ({ item }: any) => {
  return (
    <Link to="/" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.dec}</p>
          <div className="star">
            <img src="./img/start.png" alt="star" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="details" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
