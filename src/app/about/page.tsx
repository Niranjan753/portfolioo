"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Notepad from '../components/Notepad';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-black text-white"
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
              <Notepad />
        <p className="text-xl mt-8 text-center mx-2 md:mx-4 lg:mx-8 text-custom-green">
          Interested in collaborating on freelance projects or discussing related work opportunities?<br />
          I'd love to hear from you! Feel free to reach out to me at{' '}
          <a href="mailto:niranjanr753@gmail.com" className="text-custom-green-hover hover:underline">
            niranjanr753@gmail.com
          </a>
        </p>
              
      </main>
    </motion.div>
  );
}