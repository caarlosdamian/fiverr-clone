import React from 'react';
import { Slide } from '../../components/slide/Slide';
import './Gig.scss';

export const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrums">{'FIVEER > GRAPHICS & DESING >'}</span>
          <h1> I will create ai generated art for your</h1>
          <div className="user">
            <img src="" alt=""  className='pp'/>
            <span>John Dow</span>
            <div className="starts">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slide slidesToShow={1} arrowsScroll={1}>
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/225619919/original/0932a0b7ee036a5be4b30b772cff57df5e876c7e/create-ai-generated-art-prints.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/225619919/original/3b1f0a9d6c446fb774d1894d7b3f911fbc4f856e/create-ai-generated-art-prints.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/73283ca0d2bed8134b0493e0d867619d-1681134908/8/create-ai-generated-art-prints.png"
              alt=""
            />
          </Slide>
          <h2>About this gig</h2>
          <p>
            I use an AI program to create Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Illo, velit pariatur natus laudantium
            reprehenderit odit at minus vitae, facilis esse architecto dolor
            inventore porro et tempora sit, sequi magnam doloribus? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Non itaque officiis
            tenetur atque molestias fugiat, voluptas voluptatum fuga est quos
            ducimus dignissimos aperiam cumque sequi animi autem doloribus
            beatae recusandae.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="" alt="" />
              <div className="info">
                <span>Joah Doe</span>
                <div className="starts">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USE</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USE</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USE</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USE</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USE</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                dolorum quis aperiam commodi quae saepe ea pariatur magnam
                molestias sequi temporibus, quod omnis reiciendis, tempora ullam
                porro libero, ab quasi!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="starts">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
                eum accusantium! Minima dolor eveniet veniam culpa architecto
                tenetur quia ad provident unde sit sequi laudantium,
                reprehenderit sapiente omnis, nemo magni.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>YES</span>
                <img src="/img/dislike.png" alt="" />
                <span>No?</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
