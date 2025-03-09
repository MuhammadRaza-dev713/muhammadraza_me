import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 sticky top-0 z-50 w-full bg-white border-b-[1px] px-[4rem] py-[1rem]">
      <div className="container mx-auto flex justify-between items-center">
      <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 cursor-pointer"
        >
          Frontend Engineer
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
        </div>

        {/* Navigation Links */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:gap-8 gap-4 mt-4 md:mt-0">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
