"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="m-5 p-10 transparent text-black bold p-4 flex items-center">
      {/* Image on the left */}
      <Image
        src="/my.jpeg"
        alt="Your Name"
        width={12}
        height={12}
        className="w-12 h-12 rounded-full"
      />

      {/* Name in the middle (flex-grow to take remaining space) */}
      <h1 className="flex-grow text-xl font-semibold ml-4">Your Name</h1>

      {/* Links on the right */}
      <nav className="">
        <motion.ul
          initial={{ "--rotate": "0deg" } as any}
          animate={{ "--rotate": "360deg" } as any}
          transition={{ duration: 2 }}
          className="flex space-x-5 items-center"
        >
          <li style={{ transform: "rotate(var(--rotate))" }}>
            <a href="#" className="font-semibold text-lg hover:text-black-300">
              Home
            </a>
          </li>
          <li style={{ transform: "rotate(var(--rotate))" }}>
            <a href="/about" className="font-semibold text-lg hover:text-black-300">
              About
            </a>
          </li>
          <li style={{ transform: "rotate(var(--rotate))" }}>
            <a href="#" className="font-semibold text-lg hover:text-black-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#" >
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Hire Me
        </button>
            </a>
          </li>
          <li>
            <Image
              src="/flag.jpeg"
              alt="Your Name"
              className="w-20 h-12"
              width={12}
              height={12}
            />
          </li>
         
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
