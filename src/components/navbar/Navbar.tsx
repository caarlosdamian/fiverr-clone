import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
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
                      <span>Gigs</span>
                      <span>Add new Gig</span>
                    </>
                  )}
                  <span>Order</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
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
