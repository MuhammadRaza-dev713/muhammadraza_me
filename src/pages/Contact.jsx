


import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaArrowRight, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/contact", { name, email, message })
  //     .then((result) => console.log(result.data))
  //     .catch((error) => console.log(error));

  //   alert("✅ Form Submitted Successfully!");
  //   navigate("/");
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  // Track attempt (user clicked submit with valid HTML required fields)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_form_attempt",
    form_id: "contact",
    form_name: "Contact Form",
    form_destination: window.location.href,
    form_length: 3,
  });

  try {
    const res = await axios.post("/api/contact", { name, email, message });

    // Track success
    window.dataLayer.push({
      event: "contact_form_submit",
      form_id: "contact",
      form_name: "Contact Form",
      form_destination: window.location.href,
      form_length: 3,
    });

    alert("✅ Form Submitted Successfully!");
    setTimeout(() => navigate("/"), 300);
  } catch (error) {
    // Track error
    window.dataLayer.push({
      event: "contact_form_error",
      form_id: "contact",
      form_name: "Contact Form",
      error_message: error?.message || "unknown",
    });

    console.log(error);
    alert("❌ Submission failed. Please try again.");
  }
};


  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Heading */}
      <div className="mt-10 text-center">
        <h1 className="font-bold text-3xl text-gray-700">Get in Touch</h1>
        <p className="text-gray-500 text-md">Let’s connect and collaborate</p>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row gap-10 mt-12 px-6 md:px-20 pb-20">
        {/* Left: Contact Options */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-6">
          <h2 className="text-2xl font-semibold text-gray-600">Talk to me</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 w-full">
            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <FiMail className="text-gray-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-500 text-sm mb-4">raza.dev713@gmail.com</p>
              <a
                href="mailto:raza.dev713@gmail.com"
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 transition-colors"
              >
                Write me <FaArrowRight />
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <FaWhatsapp className="text-gray-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-4">+92-328-6500052</p>
              <a
                href="https://wa.me/923286500052"
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-green-600 transition-colors"
              >
                Write me <FaArrowRight />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <FaLinkedin className="text-gray-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-500 text-sm mb-4">Muhammad Raza</p>
              <a
                href="https://www.linkedin.com/in/muhammad-raza-51074820a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-blue-700 transition-colors"
              >
                Write me <FaArrowRight />
              </a>
            </div>

            {/* Fiverr */}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <SiFiverr className="text-gray-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold">Fiverr</h3>
              <p className="text-gray-500 text-sm mb-4">Freelance Services</p>
              <a
                href="https://www.fiverr.com/s/Eg2G6aD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-green-500 transition-colors"
              >
                Write me <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col w-full md:w-1/2 bg-white shadow-md rounded-2xl p-8">
          <h2 className="font-semibold text-xl text-gray-600 mb-6">
            Write me your project
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Message"
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white w-full flex flex-col items-center gap-6 py-10 px-4">
        <h1 className="font-bold text-2xl">Muhammad Raza</h1>

        <nav className="flex gap-6 text-gray-600 font-medium">
          <Link to="/home2" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link to="/project" className="hover:text-gray-900 transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/muhammad-raza-51074820a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-all"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://wa.me/923286500052"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-all"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="mailto:raza.dev713@gmail.com"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-600 hover:text-white transition-all"
          >
            <FiMail size={22} />
          </a>
          <a
            href="https://www.fiverr.com/s/Eg2G6aD"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-green-400 hover:text-white transition-all"
          >
            <SiFiverr size={22} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Muhammad Raza. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
