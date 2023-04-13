import React from "react";
import "./Gigs.scss";

export const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrubs">FIVERR GRAPICHS & DESINGS</span>
        <h1>IA Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};
