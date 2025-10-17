import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import FluidBackground from "./FluidBackground";
import { ReactTyped } from "react-typed";
import { MdEmail } from "react-icons/md";
import { PiDownloadSimpleBold } from "react-icons/pi";
import raselPic from "../../../assets/Rasel2.jpg";
const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-base-100 overflow-hidden">
      {/* 🔥 Fluid Background */}
      <div className="absolute inset-0">
        <FluidBackground />
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col-reverse lg:flex-row-reverse items-center justify-between
                   w-full 
                   px-4 sm:px-6 sm:mt-10 md:px-10 lg:px-20 xl:px-36 
                   py-12 sm:py-16 md:py-20 lg:py-24"
      >
        {/* ✅ Profile Image */}

        <div className="avatar pr-[6px] mb-6 lg:mb-0  ">
          <div className=" sm:mt-10 w-52 sm:w-56 md:w-64 lg:w-96 lg:h-full rounded-full border-4 border-purple-500  shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_20px_#a855f7] transition duration-700  mt-7">
            <img src={raselPic} alt="Profile" />
          </div>
        </div>

        {/* ✅ Text Content */}
        <div className="text-center lg:text-left space-y-4 pl-[6px]">
          <p className="text-base sm:text-lg text-gray-400">Hello, I’m</p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
                       bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 
                       bg-clip-text text-transparent drop-shadow-lg"
          >
            Md. Rasel Uddin
          </h1>

          {/* 🔥 Typed Effect */}
          <h2
            className="text-lg sm:text-xl md:text-2xl font-medium animate-pulse text-white 
                       [text-shadow:_0_0_8px_rgb(255,255,255),_0_0_12px_rgb(255,253,254)]"
          >
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Problem Solver",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </h2>

          <p className="py-2 text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
            I enjoy building modern, responsive web applications and exploring
            creative solutions through code.
          </p>

          {/* ✅ Social Icons */}
          <div className="flex gap-6 sm:gap-7 justify-center lg:justify-start text-xl sm:text-2xl">
            <a
              href="https://github.com/Rasel7537"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1117] text-white 
                         shadow-[0_0_10px_#6e40c9,0_0_20px_#6e40c9,0_0_30px_#6e40c9] 
                         hover:scale-125 hover:text-[#6e40c9] 
                         hover:shadow-[0_0_20px_#6e40c9,0_0_40px_#6e40c9,0_0_60px_#6e40c9] 
                         transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rasel-uddin-96a277373/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1117] text-white 
                         shadow-[0_0_10px_#0a66c2,0_0_20px_#0a66c2,0_0_30px_#0a66c2] 
                         hover:scale-125 hover:text-[#0a66c2] 
                         hover:shadow-[0_0_20px_#0a66c2,0_0_40px_#0a66c2,0_0_60px_#0a66c2] 
                         transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rasel.uddin.engineer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1117] text-white 
                         shadow-[0_0_10px_#0ac22f,0_0_20px_#0ac244,0_0_30px_#0ac238] 
                         hover:scale-125 hover:text-[#0ac247] 
                         hover:shadow-[0_0_20px_#0ac272,0_0_40px_#0abf6a,0_0_60px_#09d71e] 
                         transition"
            >
              <MdEmail size={18} />
            </a>
          </div>

          {/* ✅ Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            download
            className="relative inline-block h-[45px] sm:h-[50px] w-[160px] sm:w-[190px] 
                       hover:scale-[0.95] transition duration-300 mt-6 sm:mt-8"
          >
            <i className="absolute -inset-[2px] block rounded-[3px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)]"></i>
            <i className="absolute -inset-2 block rounded-[3px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>
            <span
              className="absolute top-0 left-0 flex h-full w-full justify-center items-center gap-2 overflow-hidden
              rounded-[3px] border border-[#040a29] bg-[rgba(14,21,56,0.65)]
              tracking-[1px] text-white font-semibold text-sm sm:text-base
              before:absolute before:top-0 before:-left-[50%] before:h-full before:w-full
              before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]"
            >
              <PiDownloadSimpleBold size={18} /> Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;





