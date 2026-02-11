
import React from "react";
import { FaUserTie, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import "./AboutCSS.css";

export const About = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Helmet>
        <title>About | Portfolio</title>
      </Helmet>

      {/* Heading */}
      <div className="text-center mt-8">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
          About Me
        </h1>
        <p className="text-gray-500 text-md md:text-lg mt-2">
          My Introduction
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl px-6 md:px-16 py-12 gap-12">
        
        {/* Left Animated Blob / Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="blobImg w-64 h-64 md:w-80 md:h-80"></div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-col items-center md:items-start gap-8">
            
            {/* Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <FaUserTie className="text-gray-600 w-8 h-8 hover:text-blue-600 transition-colors duration-300" />
                <p className="font-semibold">Experience</p>
                <p className="text-center text-sm text-gray-500">3+ Years Experience</p>
                
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <FaCheckCircle className="text-gray-600 w-8 h-8 hover:text-green-700 transition-colors duration-300" />
                <p className="font-semibold">Completed</p>
                <p className="text-sm text-gray-500">5+ Projects</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <FaHeadset className="text-gray-600 w-8 h-8 hover:text-purple-600 transition-colors duration-300" />
                <p className="font-semibold">Service</p>
                <p className="text-sm text-gray-500">24/7 Available</p>
              </div>
            </div>

           {/* Description */}
<p className="text-center md:text-left text-gray-600 font-medium leading-relaxed max-w-lg">
  I’m a Full Stack Developer who builds scalable, high-performance, and 
  user-friendly web applications from frontend to backend. I specialize in 
  modern UI/UX, robust APIs, and cloud-ready architectures. Along with 
  <span className="font-semibold">Web 2.0</span> &{" "}
  <span className="font-semibold">Web 3.0</span>, I integrate 
  <span className="font-semibold"> AI & LLM-powered solutions</span> to create 
  smart, automated, and data-driven products that deliver real business impact.
</p>


            {/* Download CV Button */}
            <a
              href="/cv/muhammadrazaresume.pdf"
              download="MYRESUME.pdf"
              className="bg-gray-800 text-white py-3 px-6 rounded-2xl flex items-center gap-2 text-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
            >
              Download CV
              <IoMdDocument className="text-white w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

