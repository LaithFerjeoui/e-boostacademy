import React from "react";
import Navbar from "./Navbar";
import HomePage from "../Views/HomePage";
import Footer from "./Footer";
import Offers from "../Views/Offers";
import Points from "../Views/Points";

const Layout = ({ flag }) => {
  return (
    <>
      <Navbar />
      {flag === "home" && <HomePage />}
      {flag === "offers" && <Offers />}
      {flag === "points" && <Points />}
      <Footer />
    </>
  );
};

export default Layout;
