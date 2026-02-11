import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-50 w-full border-b px-6 sm:px-12 py-4">
      <div className="container mx-auto flex justify-between items-center relative">
        
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all cursor-pointer"
        >
          FullStack Web Engineer
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none transition-all"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="relative text-lg font-medium text-gray-600 transition-colors duration-300 hover:text-orange-600 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange-600 
              before:transition-all before:duration-300 hover:before:w-full cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation - Sliding Menu */}
        <div className={`fixed inset-0 bg-black/40 z-40 ${isOpen ? "block" : "hidden"}`} onClick={closeMenu}></div>

        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600">
              ✕
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="text-lg font-medium text-gray-700 transition hover:text-orange-600"
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
