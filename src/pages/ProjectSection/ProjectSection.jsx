import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaReact,
  FaNodeJs,
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const projects = [
    {
      id: 1,
      name: "MERN Task Management App",
      desc: "A full-stack task management app that helps users create, update, and manage tasks in real time with Firebase authentication.",
      features: [
        "✅ User authentication with Firebase",
        "✅ Task creation, edit & delete functionality",
        "✅ Responsive design with Tailwind CSS",
      ],
      tech: [
        { icon: <FaReact className="text-cyan-400 text-2xl" />, name: "React" },
        {
          icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
          name: "Tailwind",
        },
        {
          icon: <FaNodeJs className="text-green-500 text-2xl" />,
          name: "Node.js",
        },
        {
          icon: <SiExpress className="text-gray-400 text-2xl" />,
          name: "Express",
        },
        {
          icon: <SiMongodb className="text-green-400 text-2xl" />,
          name: "MongoDB",
        },
      ],
      images: [
        "https://i.imgur.com/AiRfZkT.png",
        "https://i.imgur.com/o4BRHOQ.jpeg",
        "",
      ],
      live: "#",
      github: "#",
      details: "/project-details-1",
    },
    {
      id: 2,
      name: "React E-Commerce Store",
      desc: "An interactive e-commerce site built with React, Express, and MongoDB — featuring product filtering, cart management, and user login.",
      features: [
        "🛒 Add to Cart, Wishlist & Checkout System",
        "📦 MongoDB Product Management",
        "📱 Fully responsive and modern UI",
      ],
      tech: [
        { icon: <FaReact className="text-cyan-400 text-2xl" />, name: "React" },
        {
          icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
          name: "Tailwind",
        },
        {
          icon: <FaNodeJs className="text-green-500 text-2xl" />,
          name: "Node.js",
        },
        {
          icon: <SiExpress className="text-gray-400 text-2xl" />,
          name: "Express",
        },
        {
          icon: <SiMongodb className="text-green-400 text-2xl" />,
          name: "MongoDB",
        },
      ],
      images: [
        "https://via.placeholder.com/800x450.png?text=E-Commerce+1",
        "https://via.placeholder.com/800x450.png?text=E-Commerce+2",
        "https://via.placeholder.com/800x450.png?text=E-Commerce+3",
      ],
      live: "#",
      github: "#",
      details: "/project-details-2",
    },
    {
      id: 3,
      name: "Personal Portfolio Website",
      desc: "A stunning personal portfolio built with React and Tailwind CSS featuring 3D animations, smooth scroll, and dark mode support.",
      features: [
        "🌐 Fully responsive modern design",
        "✨ Animated skill & project sections",
        "🎨 3D floating icons and smooth transitions",
      ],
      tech: [
        { icon: <FaReact className="text-cyan-400 text-2xl" />, name: "React" },
        {
          icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
          name: "Tailwind",
        },
        {
          icon: <SiFirebase className="text-yellow-400 text-2xl" />,
          name: "Firebase",
        },
      ],
      images: [
        "https://via.placeholder.com/800x450.png?text=Portfolio+1",
        "https://via.placeholder.com/800x450.png?text=Portfolio+2",
        "https://via.placeholder.com/800x450.png?text=Portfolio+3",
      ],
      live: "#",
      github: "#",
      details: "/project-details-3",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center justify-center"
    >
      {/* === Heading === */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-center"
      >
        ⭐ Featured Work
      </motion.h2>
      {/* === New Sub-title (Responsive) === */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-4xl text-center leading-relaxed px-4"
      >
        A curated collection of my best projects, showcasing modern full-stack
        development.
      </motion.p>
      {/* ================================== */}
      {/* === Project Cards === */}
      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-between gap-10 bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-6 md:p-10 hover:border-purple-600 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-500`}
          >
            {/* === Left: Carousel === */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg">
              <Slider {...settings}>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.name}
                    className="w-full h-72 object-cover rounded-2xl"
                  />
                ))}
              </Slider>
            </div>

            {/* === Right: Info === */}
            <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                {project.name}
              </h3>

              <p className="text-gray-300 leading-relaxed">{project.desc}</p>

              <ul className="list-disc list-inside text-gray-400 pl-4">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* === Tech Stack === */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {t.icon} {t.name}
                  </span>
                ))}
              </div>

              {/* === Buttons === */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
                <a
                  href={project.live}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
                >
                  Live Link <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
                >
                  GitHub <FaGithub />
                </a>
                <a
                  href={project.details}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
                >
                  Details <FaInfoCircle />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
