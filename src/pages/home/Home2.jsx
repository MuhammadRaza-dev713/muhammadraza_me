import React from 'react';
import { Link } from 'react-scroll';
import { FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import About from '../about/About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';
import { SiFiverr } from "react-icons/si";
import { Helmet } from 'react-helmet-async';

import './HomeCSS.css'


const Home2 = () => {

    return (
        <>
        <div>
            {/* Hero Section */}
            <div
                id="home"
                className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray- p-6 px-[4rem] gap-10"
            >
                {/* Left Content Div */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4  mt-6 md:mt-0 w-full md:w-1/2">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/MuhammadRaza-dev713"  // Replace with your GitHub URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 text-3xl hover:text-black transition-colors duration-300 cursor-pointer"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="http://linkedin.com/in/muhammad-raza-51074820a"  // Replace with your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 text-3xl  hover:text-blue-800 transition-colors duration-300 cursor-pointer"
                        >
                            <FaLinkedin />
                        </a>
                        {/* Fiverr */}
                        <a
                            href="https://www.fiverr.com/s/2Kk38dQ"  // Replace with your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-6xl top text-gray-500 hover:text-green-900 transition-colors duration-300 cursor-pointer"
                        >
                            <SiFiverr />
                        </a>
                    </div>


                    {/* Text Content */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                            Welcome to Muhammad Raza
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg text-gray-500 max-w-[400px]">
                            I'm a creative developer based in Dubai, and I'm very passionate and dedicated to my work.
                        </p>
                    </div>

                    {/* Contact Button */}
                    <div>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="bg-gray-700 text-white py-3 px-6 rounded-2xl flex justify-center items-center gap-2 text-xl hover:bg-gray-500 transition-colors duration-300 cursor-pointer"
                        >
                            Say Hello
                            <FiPhone className="text-white mt-1 w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Animated Blob */}
                <div className="blob"></div>
            </div>
        </div>

            {/* Sections */}
            <section id="about" className="py-20"><About /></section>
            <section id="skills" className="py-20"><Skills /></section>
            <section id="projects" className="py-20"><Projects /></section>
            <section id="contact" className="py-20"><Contact /></section>
        </>
    );
};

export default Home2;
