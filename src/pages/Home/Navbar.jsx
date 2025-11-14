
import React, { useState } from "react";
import { Link } from "react-scroll"; // 🧭 smooth scroll library
import raseLogo from "../../assets/R.jpg";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between bg-[#0a0202] shadow-[0_4px_15px_rgba(0,0,0,0.4)]
      sticky top-0 z-[1000] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 py-3 md:py-4 text-white"
    >
      {/* ===== Left: Logo ===== */}
      <div className="flex items-center gap-2">
        <img
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
          src={raseLogo}
          alt="Logo"
        />
        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-[1.6rem] font-bold text-white 
          [text-shadow:_0_0_8px_rgb(255,255,255),_0_0_12px_rgb(255,253,254)]"
        >
          Rasel
        </div>
      </div>

      {/* ===== Middle: Nav Links (Desktop) ===== */}
      <ul className="hidden lg:flex gap-6 xl:gap-[25px] text-base xl:text-lg font-medium list-none">
        {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-cyan-400"
              className="relative text-white text-[1rem] font-medium 
                py-[5px] transition-colors duration-300 hover:text-cyan-400
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_5px_#0ff,0_0_10px_#0ff]
                after:transition-all after:duration-300
                hover:after:w-full cursor-pointer"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* ===== Right: Resume Button (Desktop) ===== */}
      <div className="hidden lg:block">
        <a
          href="/resume.pdf"
          target="_blank"
          download
          className="relative inline-block h-[40px] md:h-[45px] w-[130px] md:w-[160px] 
          hover:scale-[0.95] transition duration-300 text-sm md:text-base"
        >
          {/* Outer Gradient Border */}
          <i className="absolute -inset-[2px] block rounded-[3px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)]"></i>

          {/* Glow Blur Effect */}
          <i className="absolute -inset-2 block rounded-[3px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>

          {/* Button Content */}
          <span
            className="absolute top-0 left-0 flex h-full w-full justify-center items-center gap-2 overflow-hidden
              rounded-[3px] border border-[#040a29] bg-[rgba(14,21,56,0.65)] 
              tracking-[1px] text-white font-semibold
              before:absolute before:top-0 before:-left-[50%] before:h-full before:w-full 
              before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]"
          >
            <PiDownloadSimpleBold size={18} /> Resume
          </span>
        </a>
      </div>

      {/* ===== Mobile Menu Toggle ===== */}
      <div
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {isOpen && (
        <div
          className="absolute top-[65px] left-0 w-full bg-black text-center flex flex-col gap-5 
          sm:gap-6 py-5 sm:py-6 lg:hidden border-t border-cyan-400 
          shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
        >
          {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 text-base sm:text-lg cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
