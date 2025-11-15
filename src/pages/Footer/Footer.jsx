import React, { useEffect } from "react";
import "./rain.css";
import raseLogo from "../../assets/R.jpg";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll"; // 🧭 smooth scroll added

const Footer = () => {
  const makeItRain = () => {
    const front = document.querySelector(".rain.front-row");
    const back = document.querySelector(".rain.back-row");

    if (!front || !back) return;

    front.innerHTML = "";
    back.innerHTML = "";

    let increment = 0;

    while (increment < 100) {
      let randoHundo = Math.floor(Math.random() * 98) + 1;
      let randoFiver = Math.floor(Math.random() * 4) + 2;

      increment += randoFiver;

      const drop = document.createElement("div");
      drop.className = "drop";
      drop.style.left = `${increment}%`;
      drop.style.animationDelay = `0.${randoHundo}s`;
      drop.style.animationDuration = `0.5${randoHundo}s`;

      const stem = document.createElement("div");
      stem.className = "stem";
      stem.style.animationDelay = `0.${randoHundo}s`;
      stem.style.animationDuration = `0.5${randoHundo}s`;

      const splat = document.createElement("div");
      splat.className = "splat";
      splat.style.animationDelay = `0.${randoHundo}s`;
      splat.style.animationDuration = `0.5${randoHundo}s`;

      drop.appendChild(stem);
      drop.appendChild(splat);
      front.appendChild(drop);

      const backDrop = drop.cloneNode(true);
      back.appendChild(backDrop);
    }
  };

  useEffect(() => {
    makeItRain();
  }, []);

  return (
    <footer className="relative bg-black text-white px-10 py-12 overflow-hidden border-t border-gray-800 xl:pl-36">
      {/* 🌧️ Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="rain front-row"></div>
        <div className="rain back-row"></div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================ */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center gap-2 mb-3">
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

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Building digital experiences with modern web technologies. Let’s
            create something amazing together.
          </p>
        </div>

        {/* MIDDLE — QUICK LINKS */}
        <div className="flex flex-col lg:pl-32 ">
          <h3 className="text-xl font-semibold mb-4">
            <span className="border-l-4 border-cyan-400 pl-2">Quick Links</span>
          </h3>

          <div className="flex flex-col gap-2 text-gray-300 text-sm sm:text-base lg:ml-5">
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-cyan-400 cursor-pointer"
            >
              About Me
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Skills
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — GET IN TOUCH */}
        <div className="lg:pl-16">
          <h3 className="text-xl font-semibold mb-5">
            <span className="border-l-4 border-pink-500 pl-2">
              Get in Touch
            </span>
          </h3>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <div className="p-2 rounded-lg bg-gray-800/40 backdrop-blur">
              <HiOutlineMail className="w-5 h-5 text-white" />
            </div>
            <span>rasel.uddin.engineer@gmail.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 mb-6 text-gray-300">
            <div className="p-2 rounded-lg bg-gray-800/40 backdrop-blur">
              <MdPlace className="w-5 h-5 text-white" />
            </div>
            <span>Khulna, Bangladesh</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
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
                className="
              flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 
              rounded-full bg-[#0d1117] text-white
              shadow-[0_0_10px_#4b5fc7,0_0_20px_#6677d6,0_0_30px_#8090e5]
              hover:scale-125 hover:text-[#aab5f2]
              hover:shadow-[0_0_20px_#c6cff8,0_0_40px_#dee4fd,0_0_60px_#f3f6ff]
              transition
              "
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rasel.uddin.engineer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1117] text-white
             shadow-[0_0_10px_#009dff,0_0_20px_#00b2ff,0_0_30px_#00c8ff]
             hover:scale-125 hover:text-[#29d3ff]
             hover:shadow-[0_0_20px_#00d5ff,0_0_40px_#00e4ff,0_0_60px_#38f3ff]
             transition"
              >
                <MdEmail size={18} />
              </a>

              <a
                href="https://wa.me/8801314026529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1117] text-white
             shadow-[0_0_10px_#0ac22f,0_0_20px_#0ac244,0_0_30px_#0ac238]
             hover:scale-125 hover:text-[#0ac247]
             hover:shadow-[0_0_20px_#0ac272,0_0_40px_#0abf6a,0_0_60px_#09d71e]
             transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer Text */}
      {/* Full Width Border */}
     
    </footer>
  );
};

export default Footer;






