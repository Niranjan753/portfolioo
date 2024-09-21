"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 bg-transparent">
        <div className="text-2xl font-bold">
          NIRANJAN<span className="text-[#2ea44f]">.</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:block relative">
          <nav className="flex items-center space-x-3 bg-black bg-opacity-50 rounded-full p-1 border border-[#2ea44f] shadow-[0_0_10px_#2ea44f] relative z-10">
            <NavLink href="/" icon={faHome} text="HOME" isActive={pathname === '/'} />
            <NavLink href="/projects" icon={faProjectDiagram} text="PROJECTS" isActive={pathname === '/projects'} />
            <NavLink href="/about" icon={faUser} text="ABOUT" isActive={pathname === '/about'} />
          </nav>
        </div>
        <button
          className="text-2xl focus:outline-none"
          aria-label="Toggle light mode"
        >
          $
        </button>
      </header>

      {isMenuOpen && (  
        <div className="fixed top-16 left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm z-40 md:hidden">
          <nav className="flex flex-col items-center py-4">
            <NavLink href="/" icon={faHome} text="HOME" isActive={pathname === '/'} />
            <NavLink href="/projects" icon={faProjectDiagram} text="PROJECTS" isActive={pathname === '/projects'} />
            <NavLink href="/about" icon={faUser} text="ABOUT" isActive={pathname === '/about'} />
          </nav>
        </div>
      )}
    </>
  );
}

function NavLink({
  href,
  icon,
  text,
  isActive,
}: {
  href: string;
  icon: any;
  text: string;
  isActive: boolean;
}) {
  return (
    <Link href={href} className="w-full md:w-auto">
      <div className={`flex items-center justify-center md:justify-start px-4 py-2 my-2 md:my-0 rounded-full transition-all duration-300 ${
        isActive ? 'bg-[#2ea44f] text-black' : 'hover:bg-[#2ea44f] hover:text-black'
      }`}>
        <FontAwesomeIcon icon={icon} className={`w-5 h-5 mr-2 ${isActive ? 'text-black' : 'text-white group-hover:text-black'}`} />
        <span className={`text-sm ${isActive ? 'text-black' : 'text-white group-hover:text-black'}`}>{text}</span>
      </div>
    </Link>
  );
}