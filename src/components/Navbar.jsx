import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, scrollFn) => {
    e.preventDefault();
    if (scrollFn) scrollFn();
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <header className={`w-full ${props.bgColor} shadow-lg sticky top-0 left-0 z-50`}>
      <nav className="max-w-7xl mx-auto px-4 sm:flex sm:items-center sm:justify-between py-3">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <h2 className={`text-xl font-bold font-serif ${props.navLogoColor}`}>
              {"<PA/>"}
            </h2>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 text-gray-600 focus:outline-none bg-slate-200"
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
            onClick={(e) => handleScroll(e, props.scrollToSkills)}
            className={`block py-2 ${props.textColor} ${props.textHover}`}
          >
            Skills
          </a>
          <a
            href="#achievements"
            onClick={(e) => handleScroll(e, props.scrollToAchievements)}
            className={`block py-2 ${props.textColor} ${props.textHover}`}
          >
            Achievements
          </a>
      
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, props.scrollToContact)}
            className={`block mt-2 sm:mt-0 ${props.btnBgColor} ${props.btnTextColor} ${props.btnHoverColor} px-4 py-2 rounded-md transition text-center`}
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;