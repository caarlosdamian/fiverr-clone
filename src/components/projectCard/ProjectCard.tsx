import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

export const ProjectCard = ({ item }: any) => {
  return (
    <Link className="link" to={"/gigs?cat=desing"}>
      <div className="projectCard">
        <img src={item.img} alt="img-project" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
