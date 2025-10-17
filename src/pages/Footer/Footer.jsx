import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-center py-8 border-t border-gray-800">
      {/* Developer Name */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent  mb-2">
       Md. Rasel Uddin
      </h2>

      {/* Tagline */}
      <p className="text-gray-400 text-sm">
        © 2024 MERN Stack Developer. Crafting the future, one pixel at a time.
      </p>
    </footer>
  );
};

export default Footer;
