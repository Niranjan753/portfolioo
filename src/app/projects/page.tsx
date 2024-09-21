"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  title: string;
  description: string;
  github: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "SuperGigs",
    description: "SuperGigs is an India-based freelance marketplace connecting talented professionals with businesses and individuals seeking their services.",
    github: "https://github.com/Niranjan753/SuperGigs",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Grampreneur",
    description: "A platform for Instagram entrepreneurs.",
    github: "https://github.com/Niranjan753/Grampreneur",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    github: "https://github.com/Niranjan753/portfolio",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    description: "A real-time weather application with location-based forecasts.",
    github: "https://github.com/yourusername/weather-app",
    tags: ["React", "OpenWeatherMap API"],
  },
  {
    title: "Task Manager",
    description: "A full-stack task management application with user authentication.",
    github: "https://github.com/yourusername/task-manager",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with product management and secure checkout.",
    github: "https://github.com/yourusername/ecommerce-platform",
    tags: ["React", "Node.js", "Stripe API"],
  }
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
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black rounded-lg overflow-hidden shadow-lg border border-[#2ea44f] p-4 flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_10px_#2ea44f] w-full max-w-sm"
              >
                <h2 className="text-xl font-semibold mb-2 text-[#2ea44f]">{project.title}</h2>
                <p className="text-gray-300 mb-3 flex-grow text-sm">{project.description}</p>
                <div className="flex flex-wrap mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-block bg-black text-[#2ea44f] text-xs px-2 py-1 rounded-full mr-2 mb-2 border border-[#2ea44f] transition-colors duration-300 hover:bg-[#2ea44f] hover:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#2ea44f] hover:text-white transition-colors duration-300 flex items-center justify-center py-1 px-3 border border-[#2ea44f] rounded-full hover:bg-[#2ea44f] text-sm"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
