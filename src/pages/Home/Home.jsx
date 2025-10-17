import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "./AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import ProjectSection from "../ProjectSection/ProjectSection";
import Email from "../Email/Email";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Education></Education>
      <ProjectSection></ProjectSection>
      <Email></Email>
      <Footer></Footer>
    </div>
  );
};

export default Home;
