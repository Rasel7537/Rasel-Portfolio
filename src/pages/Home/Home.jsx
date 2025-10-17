import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "./AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import ProjectSection from "../ProjectSection/ProjectSection";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Education></Education>
      <ProjectSection></ProjectSection>
    </div>
  );
};

export default Home;
