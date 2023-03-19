import React from "react";
import { CatCard } from "../../components/catCard/CatCard";
import { Featured } from "../../components/featured/Featured";
import { Slide } from "../../components/slide/Slide";
import { TrustedBy } from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((item: any) => (
          <CatCard key={item.id} item={item} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freeelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best for every budget
            </div>
            <p>
              Find hight-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best for every budget
            </div>
            <p>
              Find hight-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best for every budget
            </div>
            <p>
              Find hight-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A solution built for business</h1>
            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Talent matching
            </div>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Dedicated account management
            </div>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Team collaboration tools
            </div>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Business payment solutions
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((item: any) => (
          <CatCard key={item.id} item={item} />
        ))}
      </Slide>
    </div>
  );
};
