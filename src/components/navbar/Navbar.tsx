import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    id: 1,
    username: "John",
    isSeller: true,
  });

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
    <nav className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to={"/"}> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sing in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </nav>
  );
};
