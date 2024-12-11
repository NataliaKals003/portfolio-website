"use client";
import NavLink from "./NavLink";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="items-center justify-between p-7 top-0 left-0 right-0 z-10 bg-white dark:bg-[#0a0a0a] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  rounded text-black dark:text-white"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  rounded text-black dark:text-white"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto z-10" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/NataliaKals003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white transition"
          >
            <AiFillGithub size={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/nataliakals/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white transition"
          >
            <AiFillLinkedin size={40} />
          </a>

          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-200 bg-gray-200 rounded-lg dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all"
          >
            {isDarkMode ? (
              <SunIcon className="h-8 w-8" />
            ) : (
              <MoonIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
