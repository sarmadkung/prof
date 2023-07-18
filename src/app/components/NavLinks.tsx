"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode; // Add the children prop
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="nav-link"
      >
        {children}
      </motion.a>
    </Link>
  );
};