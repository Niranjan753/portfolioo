'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser as faUserSolid,
  faTerminal,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { SiNextdotjs, SiTailwindcss, SiRust, SiRedux } from 'react-icons/si';

import { IconType } from 'react-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function Skills() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: faReact, text: "React", isFontAwesome: true },
    { icon: SiNextdotjs, text: "Next.js", isFontAwesome: false },
    { icon: SiTailwindcss, text: "Tailwind", isFontAwesome: false },
    { icon: faJs, text: "TypeScript", isFontAwesome: true },
    { icon: faNodeJs, text: "Node.js", isFontAwesome: true },
    { icon: SiRust, text: "Rust", isFontAwesome: false },
    { icon: faPython, text: "Python", isFontAwesome: true },
    { icon: faDatabase, text: "MongoDB", isFontAwesome: true },
    { icon: faDocker, text: "Docker", isFontAwesome: true },
    { icon: SiRedux, text: "Redux", isFontAwesome: false },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsLoading(false), 1500); // Simulate loading delay
        }
      },
      { threshold: 0.1 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      clearInterval(cursorInterval);
      observer.disconnect();
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand();
    }
  };

  const processCommand = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      <p key={prevOutput.length} className="mb-2">$ {command}</p>
    ]);

    switch (command.toLowerCase()) {
      case 'whoami':
        setOutput((prevOutput) => [
          ...prevOutput,
          <div key={prevOutput.length} className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUserSolid} className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">NIRANJAN</span>
          </div>
        ]);
        break;
      case 'ls skills':
        setOutput((prevOutput) => [
          ...prevOutput,
          <div key={prevOutput.length} className="grid grid-cols-2 gap-4 mb-4">
            {skills.map((skill, index) => (
              <SkillIcon 
                key={index} 
                icon={skill.icon}
                text={skill.text} 
                isFontAwesome={skill.isFontAwesome}
              />
            ))}
          </div>
        ]);
        break;
      case 'cls':
        setOutput([]);
        break;
      case 'contact':
        setOutput((prevOutput) => [
          ...prevOutput,
          <div key={prevOutput.length} className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 mr-2" />
            <span className="text-xl">Send an email to: niranjanr753@gmail.com</span>
          </div>
        ]);
        break;
      default:
        setOutput((prevOutput) => [
          ...prevOutput,
          <p key={prevOutput.length} className="mb-2">Command not recognized: {command}</p>
        ]);
    }

    setCommand('');
  };

  return (
    <>
      <div className="mb-4 text-green-400 text-sm font-mono">
        <p className="font-bold mb-2">Available commands:</p>
        <ul className="list-none">
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">whoami</code> - Display my name</li>
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">ls skills</code> - List all my skills</li>
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">cls</code> - Clear the terminal</li>
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">contact</code> - Send me an email</li>
        </ul>
      </div>
      <div ref={terminalRef} className="skills-section relative w-full h-[500px] mx-auto my-16 bg-black text-green-400 font-mono flex items-center justify-center">
        {isLoading ? (
          <div className="loading-animation">
            <div className="spinner"></div>
            <p className="mt-4">Loading terminal...</p>
          </div>
        ) : (
          <div className="w-[600px] h-[400px] border-2 border-green-400 rounded-lg p-6 overflow-hidden">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faTerminal} className="mr-2" />
              <span className="text-xl font-bold">Terminal</span>
            </div>
            <div className="overflow-y-auto h-[300px] scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-black">
              {output}
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="bg-transparent outline-none flex-grow"
                />
                {isFocused && <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>}
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .loading-animation {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .spinner {
          border: 4px solid rgba(46, 164, 79, 0.3);
          border-radius: 50%;
          border-top: 4px solid #2ea44f;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

interface SkillIconProps {
  icon: IconDefinition | IconType;
  text: string;
  isFontAwesome: boolean;
}

function SkillIcon({ icon, text, isFontAwesome }: SkillIconProps) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{'>'}</span>
      {isFontAwesome ? (
        <FontAwesomeIcon icon={icon as IconDefinition} className="w-6 h-6 mr-2" />
      ) : (
        React.createElement(icon as IconType, { className: "w-6 h-6 mr-2" })
      )}
      <span>{text}</span>
    </div>
  );
}