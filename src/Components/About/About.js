import React from "react";
import "./About.css";
import History from "./Compo/History";
import OurTeam from "./Compo/OurTeam/OurTeam";

const About = () => {
  return (
    <>
      <section className="about-banner text-center flex items-center justify-center">
        <h3 className="text-4xl text-white font-bold">About Us</h3>
      </section>
      <History />
      <OurTeam />
    </>
  );
};

export default About;
