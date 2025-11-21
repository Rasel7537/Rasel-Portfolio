
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "./AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import ProjectSection from "../ProjectSection/ProjectSection";
import Email from "../Email/Email";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";   // ⬅️ তোমার Loader import

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.5 seconds loader show hobe
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;   // ⬅️ Loader show
  }

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skill />
      <Education />
      <ProjectSection />
      <Email />
      <Footer />
    </div>
  );
};

export default Home;

