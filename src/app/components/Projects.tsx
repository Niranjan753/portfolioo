"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Grampreneur",
    description: "A platform for Instagram entrepreneurs.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/yourusername/grampreneur",
    live: "https://grampreneur.vercel.app",
  },
];

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-black text-white"
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-black text-sm rounded-full px-3 py-1 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}