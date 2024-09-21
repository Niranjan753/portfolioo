"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Niranjan";

  useEffect(() => {
    let index = 0;
    const typingIntervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingIntervalId);

        const blinkIntervalId = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(blinkIntervalId);
      }
    }, 400);

    return () => clearInterval(typingIntervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow flex justify-center items-center px-4 mt-20">
        <div className="flex flex-col items-start space-y-8 w-full max-w-xl">
          <div className="text-left w-full">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8">
              Hey, I&apos;m<br />{text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </h1>
            <div className="border-2 border-[#2ea44f] rounded-lg p-4 mb-4 w-full bg-[#0d1117] shadow-lg">
              <div className="flex items-center justify-between mb-2 border-b border-[#30363d] pb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">bash</div>
              </div>
              <div className="text-left font-mono text-[#2ea44f] text-sm sm:text-base">
                <p className="mb-2">
                  $ I am a Full Stack Developer
                </p>
                <p className="mb-2">
                  $ I develop open-source FULL-STACK apps/tools and
                </p>
                <p>
                  $ and take freelance projects.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center sm:justify-start">
              <SocialLink
                href="https://github.com/Niranjan753"
                icon={faGithub}
              />
              <SocialLink
                href="https://www.linkedin.com/in/niranjan-06861a216/"
                icon={faLinkedin}
              />
              <SocialLink
                href="https://x.com/753codes"
                icon={faTwitter}
              />
            </div>
          </div>
          <div className="relative w-full mx-auto my-12">
            <div className="absolute inset-0">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {[...Array(20)].map((_, i) => (
                  <line
                    key={i}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="#2ea44f"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                ))}
              </svg>
            </div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-4 glow">
              TECH STACK
            </h2>
          </div>
          <Skills />
        </div>
      </main>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: IconDefinition }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#2ea44f] transition-colors duration-300"
    >
      <FontAwesomeIcon icon={icon} className="w-6 h-6 sm:w-8 sm:h-8" />
    </a>
  );
}