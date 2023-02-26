import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
