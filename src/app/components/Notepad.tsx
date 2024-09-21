import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faSquare, faTimes } from "@fortawesome/free-solid-svg-icons";

const Notepad: React.FC = () => {
  return (
    <div className="bg-black text-custom-green rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto border border-custom-green">
      <div className="bg-black px-4 py-2 flex justify-between items-center border-b border-custom-green">
        <div className="flex items-center space-x-2">
          <span className="text-custom-green">📝</span>
          <span>About.txt</span>
        </div>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faMinus} className="text-custom-green" />
          <FontAwesomeIcon icon={faSquare} className="text-custom-green" />
          <FontAwesomeIcon icon={faTimes} className="text-custom-green" />
        </div>
      </div>
      <div className="px-4 py-2 border-b border-custom-green">
        <span className="mr-4">File</span>
        <span className="mr-4">Edit</span>
        <span>View</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <p>Hello! I'm Niranjan, a passionate Full Stack Developer with a keen interest in building innovative web applications. My journey in the world of programming began with a fascination for creating interactive user experiences, and it has since evolved into a deep love for both frontend and backend development.</p>

        <p>I specialize in modern web technologies, with a particular focus on the JavaScript ecosystem. My toolkit includes React for building dynamic user interfaces, Node.js for server-side programming, and Next.js for creating performant and SEO-friendly web applications. I'm always excited to learn and adapt to new technologies, believing that continuous learning is key in our ever-evolving field.</p>

        <p>Beyond coding, I'm deeply interested in open source contributions, artificial intelligence, and machine learning. I believe these areas are shaping the future of technology, and I'm eager to be part of this transformation. When I'm not coding, you can find me exploring new tech blogs, contributing to open source projects, or experimenting with AI models. Feel free to reach out to me at niranjan.dev@example.com for collaborations or just a friendly chat about tech!</p>
      </div>
      <div className="bg-black px-4 py-1 text-xs flex justify-between border-t border-custom-green">
        <span>Ln 1, Col 1</span>
        <span>100%</span>
        <span>UTF-8</span>
          </div>
      </div>
      

    
  );
};

export default Notepad;