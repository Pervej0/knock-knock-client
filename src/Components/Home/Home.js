import React from "react";
import Banner from "./Compo/Banner";
import Category from "./Compo/Category";
import Features from "./Compo/Features";
import Services from "./Compo/Services";
import Subscription from "./Compo/Subscription";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Services />
      <Features />
      <Subscription />
    </>
  );
};

export default Home;
