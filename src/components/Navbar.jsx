import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:flex sm:items-center sm:justify-between py-3">
        {/* Logo */}
        <div className="flex items-center justify-between">
         
            <FaHome  size={30}/>
        

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 text-gray-600 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`sm:flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#skills"
            className="block py-2 text-gray-700 hover:text-blue-500"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="block py-2 text-gray-700 hover:text-blue-500"
          >
            Achievements
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-700 hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block mt-2 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
