import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 py-16">
      {/* === Section Heading === */}
      <motion.h2
        initial={{ opacity: 0, y: 10}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-5xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500  text-center"
      >
        🎓 Education
      </motion.h2>
      {/* === Sub-title (New & Responsive) === */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-base md:text-lg lg:text-xl text-white mb-9 max-w-2xl text-center leading-relaxed"
      >
        Cultivating knowledge and skills for future tech leadership.
      </motion.p>
      {/* ==================================== */}

      {/* === Education Card === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px rgba(168,85,247,0.8)",
        }}
        className="relative bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 w-full max-w-2xl text-center transition-all duration-500 hover:border-purple-500"
      >
        {/* Glowing background blur */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-700/20 to-pink-600/20 blur-3xl -z-10"></div>

        {/* === Icon === */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <div className="p-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/30">
            <FaUniversity className="text-4xl md:text-5xl text-white" />
          </div>
        </motion.div>

        {/* === Content === */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-400 text-base md:text-lg mb-3"
        >
          2023 - Present 🎓
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold bg-white bg-clip-text text-transparent mb-3"
        >
          Khulna Khan Bahadur Ahsanullah University
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-gray-300"
        >
          B.Sc in Computer Science and Engineering
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Education;
