import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mx-auto bg-black">
      <div className="flex justify-center items-center bg-black py-16 px-6 lg:ml-12">
        {/* 🔹 Animated Gradient Border */}
        <div className="animate-gradient bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] p-[6px] rounded-2xl shadow-[0_0_25px_rgba(212,0,212,0.5)] max-w-4xl w-full">
          <div className="bg-black rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-6 inline-block">
              About Me
            </h2>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify text-gray-300">
              I'm a passionate{" "}
              <span className="font-semibold text-white [text-shadow:_0_0_8px_rgb(255,255,255),_0_0_12px_rgb(255,253,254)]">
                Full-Stack Developer
              </span>{" "}
              specializing in building scalable, interactive, and user-friendly
              web applications. I work with{" "}
              <span className="font-semibold text-white [text-shadow:_0_0_8px_rgb(255,255,255),_0_0_12px_rgb(255,253,254)]">
                React.js
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white [text-shadow:_0_0_8px_rgb(255,255,255),_0_0_12px_rgb(255,253,254)]">
                Node.js, Express.js, MongoDB
              </span>{" "}
              for full-stack development. I focus on writing clean, maintainable
              code and building secure, scalable web applications with modern
              design.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Right Side - Shuffle Image Grid */}
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1661962637468-d25fc279fbe0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1046",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1086",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1649371176738-dfc088e7a037?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1661876806982-61d04a531d8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1155",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1585143042060-77fd3b53905a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1516116412344-6663387e8590?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2128",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1670057037226-b3d65909424f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 13,
    src: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1597440836382-e5f0bd6155f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1687603858673-a08a2dc2302c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] lg:mr-20 gap-2 rounded-xl overflow-hidden shadow-lg">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default AboutMe;











