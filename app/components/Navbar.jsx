"use client"
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <nav className="py-8 px-4 flex items-center justify-between bg-black relative">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src="/navbar/logo.png" // Path to the image file
          alt="Logo"
          width={134} // Desired width
          height={204} // Desired height
          className="w-20 sm:w-28" // Responsive logo scaling
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex font-normal text-white gap-8 lg:gap-10">
        <li className="hover:text-gray-400 cursor-pointer">THE BOOK</li>
        <li className="hover:text-gray-400 cursor-pointer">THE SHOW</li>
        <li className="hover:text-gray-400 cursor-pointer">THE AUTHOR</li>
        <li className="hover:text-gray-400 cursor-pointer">BUY</li>
      </ul>

      {/* Contact Button */}
      <button className="hidden md:block bg-[#07211E] text-white px-6 py-2 rounded-lg hover:bg-[#054c43] transition">
        CONTACT
      </button>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-4xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Animated Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-3/4 bg-black text-white z-50 flex flex-col items-center justify-center"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <ul className="space-y-8 text-lg">
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            THE BOOK
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            THE SHOW
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            THE AUTHOR
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            BUY
          </li>
        </ul>
        <button
          className="mt-8 bg-[#07211E] text-white px-6 py-2 rounded-lg hover:bg-[#054c43] transition"
          onClick={() => setIsOpen(false)}
        >
          CONTACT
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
