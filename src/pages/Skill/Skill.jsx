
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaReact,
  FaDatabase,
  FaJsSquare,
  FaFire,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML & CSS", percent: 95, color: "from-orange-500 to-pink-500", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "Tailwind CSS", percent: 90, color: "from-sky-400 to-blue-500", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", percent: 85, color: "from-yellow-400 to-amber-500", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", percent: 80, color: "from-cyan-400 to-blue-600", icon: <FaReact className="text-cyan-400" /> },
  { name: "MongoDB", percent: 70, color: "from-green-400 to-emerald-600", icon: <FaDatabase className="text-green-400" /> },
  { name: "Express.js", percent: 65, color: "from-gray-400 to-gray-600", icon: <SiExpress className="text-gray-300" /> },
  { name: "Firebase", percent: 75, color: "from-amber-400 to-orange-500", icon: <FaFire className="text-amber-400" /> },
];

const Skill = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden ">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-extrabold mb-14 text-transparent  bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text"
      >
        💫 My Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center border border-gray-800 hover:border-purple-500 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Floating Logo (smooth & continuous) */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                filter: [
                  "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
                  "drop-shadow(0 0 20px rgba(255,255,255,0.9))",
                  "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
                ],
              }}
              transition={{
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-7xl mb-6 relative z-10"
            >
              {skill.icon}
            </motion.div>

            {/* Reflection Glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleY: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[52%] left-1/2 -translate-x-1/2 w-24 h-12 bg-white/10 blur-xl rounded-full"
            ></motion.div>

            <h3 className="text-xl font-semibold mt-6 mb-4 z-10">{skill.name}</h3>

            {/* Progress Bar (faster + smoother) */}
            <div className="relative w-full bg-gray-700 h-3 rounded-full overflow-hidden z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className={`absolute h-3 rounded-full bg-gradient-to-r ${skill.color}`}
              ></motion.div>
            </div>

            <p className="mt-3 text-sm text-gray-300 z-10">{skill.percent}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
