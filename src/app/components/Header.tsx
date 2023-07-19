"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      {/* Image on the left */}
      <Image
        src="/my.jpeg"
        alt="Your Name"
        className="w-12 h-12 rounded-full"
      />

      {/* Name in the middle (flex-grow to take remaining space) */}
      <h1 className="flex-grow text-xl font-semibold ml-4">Your Name</h1>

      {/* Links on the right */}
      <nav>
        <motion.ul
          initial={{ "--rotate": "0deg" } as any}
          animate={{ "--rotate": "360deg" } as any}
          transition={{ duration: 2 }}
          className="flex space-x-4"
        >
          <li style={{ transform: "rotate(var(--rotate))" }}>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li style={{ transform: "rotate(var(--rotate))" }}>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li style={{ transform: "rotate(var(--rotate))" }}>
            <a href="#" className="hover:text-gray-300">
              Social Media
            </a>
          </li>
          <li>
            <Image
              src="/flag.jpeg"
              alt="Your Name"
              className="w-20 h-12"
            />
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
