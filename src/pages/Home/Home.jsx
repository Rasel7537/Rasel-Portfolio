import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "./AboutMe/AboutMe";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
