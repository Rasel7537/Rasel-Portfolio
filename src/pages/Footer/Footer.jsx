

// import React, { useEffect } from "react";
// import "./rain.css";
// import raseLogo from "../../assets/R.jpg";

// const Footer = () => {
//   const makeItRain = () => {
//     const front = document.querySelector(".rain.front-row");
//     const back = document.querySelector(".rain.back-row");

//     if (!front || !back) return;

//     front.innerHTML = "";
//     back.innerHTML = "";

//     let increment = 0;

//     while (increment < 100) {
//       let randoHundo = Math.floor(Math.random() * 98) + 1;
//       let randoFiver = Math.floor(Math.random() * 4) + 2;

//       increment += randoFiver;

//       const drop = document.createElement("div");
//       drop.className = "drop";
//       drop.style.left = `${increment}%`;
//       drop.style.animationDelay = `0.${randoHundo}s`;
//       drop.style.animationDuration = `0.5${randoHundo}s`;

//       const stem = document.createElement("div");
//       stem.className = "stem";
//       stem.style.animationDelay = `0.${randoHundo}s`;
//       stem.style.animationDuration = `0.5${randoHundo}s`;

//       const splat = document.createElement("div");
//       splat.className = "splat";
//       splat.style.animationDelay = `0.${randoHundo}s`;
//       splat.style.animationDuration = `0.5${randoHundo}s`;

//       drop.appendChild(stem);
//       drop.appendChild(splat);
//       front.appendChild(drop);

//       const backDrop = drop.cloneNode(true);
//       back.appendChild(backDrop);
//     }
//   };

//   useEffect(() => {
//     makeItRain();
//   }, []);

//   return (
//     <footer className="relative bg-black text-white px-10 py-12 overflow-hidden border-t border-gray-800">

//       {/* Rain Effect */}
//       <div className="absolute inset-0 pointer-events-none opacity-40">
//         <div className="rain"></div>
//       </div>

//       {/* MAIN FOOTER CONTENT */}
//       <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between gap-10">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col max-w-sm">
//           <div className="flex items-center gap-2 mb-3">
//             <img
//               className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
//               src={raseLogo}
//               alt="Logo"
//             />
//             <div
//               className="text-lg sm:text-xl md:text-2xl lg:text-[1.6rem] font-bold text-white 
//               [text-shadow:_0_0_8px_rgb(255,255,255),_0_0_12px_rgb(255,253,254)]"
//             >
//               Rasel
//             </div>
//           </div>

//           <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//             Building digital experiences with modern web technologies.
//             <br />
//             Let’s create something amazing together.
//           </p>
//         </div>

//         {/* RIGHT SIDE — GET IN TOUCH */}
//         <div>
//           <h3 className="text-xl font-semibold mb-5">
//             <span className="border-l-4 border-pink-500 pl-2">
//               Get in Touch
//             </span>
//           </h3>

//           {/* Email */}
//           <div className="flex items-center gap-3 mb-3 text-gray-300">
//             <div className="p-2 rounded-lg bg-gray-800/40 backdrop-blur">
//               📧
//             </div>
//             <span>yourmail@gmail.com</span>
//           </div>

//           {/* Location */}
//           <div className="flex items-center gap-3 mb-6 text-gray-300">
//             <div className="p-2 rounded-lg bg-gray-800/40 backdrop-blur">
//               📍
//             </div>
//             <span>Khulna, Bangladesh</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             {/* LinkedIn */}
//             <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
//               <i className="fa-brands fa-linkedin text-xl"></i>
//             </a>

//             {/* GitHub */}
//             <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
//               <i className="fa-brands fa-github text-xl"></i>
//             </a>

//             {/* X */}
//             <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
//               <i className="fa-brands fa-x-twitter text-xl"></i>
//             </a>

//             {/* Medium */}
//             <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
//               <i className="fa-brands fa-medium text-xl"></i>
//             </a>

//             {/* WhatsApp */}
//             <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
//               <i className="fa-brands fa-whatsapp text-xl"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







import React, { useEffect } from "react";
import "./rain.css";
import raseLogo from "../../assets/R.jpg";

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
    <footer className="relative bg-black text-white px-10 py-12 overflow-hidden border-t border-gray-800">

      {/* Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="rain"></div>
      </div>

      {/* MAIN FOOTER CONTENT */}
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
            Building digital experiences with modern web technologies.
            <br />
            Let’s create something amazing together.
          </p>
        </div>

        {/* 🔥 MIDDLE — QUICK LINKS */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">
            <span className="border-l-4 border-cyan-400 pl-2">
              Quick Links
            </span>
          </h3>

          <div className="flex flex-col gap-2 text-gray-300 text-sm sm:text-base">
            <a className="hover:text-cyan-400 cursor-pointer">Home</a>
            <a className="hover:text-cyan-400 cursor-pointer">About Me</a>
            <a className="hover:text-cyan-400 cursor-pointer">Skills</a>
            <a className="hover:text-cyan-400 cursor-pointer">Projects</a>
            <a className="hover:text-cyan-400 cursor-pointer">Certificate</a>
            <a className="hover:text-cyan-400 cursor-pointer">Contact</a>
          </div>
        </div>

        {/* RIGHT SIDE — GET IN TOUCH */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            <span className="border-l-4 border-pink-500 pl-2">
              Get in Touch
            </span>
          </h3>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <div className="p-2 rounded-lg bg-gray-800/40 backdrop-blur">
              📧
            </div>
            <span>yourmail@gmail.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 mb-6 text-gray-300">
            <div className="p-2 rounded-lg bg-gray-800/40 backdrop-blur">
              📍
            </div>
            <span>Khulna, Bangladesh</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>

            <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
              <i className="fa-brands fa-github text-xl"></i>
            </a>

            <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
              <i className="fa-brands fa-x-twitter text-xl"></i>
            </a>

            <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
              <i className="fa-brands fa-medium text-xl"></i>
            </a>

            <a className="w-10 h-10 rounded-full bg-gray-800/40 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition">
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
