import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    id: 1,
    username: "John",
    isSeller: true,
  });
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    console.log("enter");
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to={"/"}>
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sing in</span>
          {!currentUser.isSeller && <span>Become a Seller</span>}
          {currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                alt="logo"
              />
              <span>{currentUser?.username}</span>

              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Order
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <Link to="/" className="link">
                Graphics & Desing
              </Link>
              <Link to="/" className="link">
                Video & Animation
              </Link>
              <Link to="/" className="link">
                writing & Translation
              </Link>
              <Link to="/" className="link">
                AI Services
              </Link>
              <Link to="/" className="link">
                Digitasl Marketing
              </Link>
              <Link to="/" className="link">
                Music & Audio
              </Link>
              <Link to="/" className="link">
                Programming & Tech
              </Link>
              <Link to="/" className="link">
                Business
              </Link>
              <Link to="/" className="link">
                Lifestyle
              </Link>
            </div>
          </>
        ))}
    </nav>
  );
};
