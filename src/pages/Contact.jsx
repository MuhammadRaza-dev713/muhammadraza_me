import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from "react-icons/si";
// import { TbBrandFiverr } from "react-icons/tb";
import { Helmet } from 'react-helmet-async';



const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("submit function is working")
    e.preventDefault();
    axios.post("http://localhost:3001/contact", { name, email, message })
      .then(result => console.log(result.data))
      .catch(error => console.log(error))
    alert("submitted Form")
    console.log("data is sended")
    navigate("/")
  }

  return (

    <>
       
    <div className=" bg-gray-100 flex flex-col items-center">
      {/* top Heading Div */}
      <div className='mt-10 text-center'>
        <h1 className='font-bold text-3xl text-gray-700'>Get in Touch</h1>
        <p className='text-gray-400 text-md'>Contact me</p>
      </div>
      {/* content div */}
      <div className=' pb-20 flex md:flex-row flex-col md:gap-0 gap-10  w-full mt-10'>
        {/* left div */}
        <div className='flex flex-col justify-center items-center w-full gap-4'>
          <h1 className='text-2xl font-semibold text-gray-500'>Talk to me</h1>
          {/* boxes */}
          <div className='flex flex-col p-4 bg-white justify-center items-center border-[1px] border-gray-300 w-[40%]'>
            <FiMail className="text-gray-500 w-8 h-8 hover:text-gray-600 transition-colors duration-300" />
            <h1 className='font-semibold'>Email</h1>
            <p className='text-gray-500 pb-5 text-[2.3vh]'>raza.dev713@gmail.com</p>
            <Link to={"https://mail.google.com/mail/u/0/#inbox"} className='flex items-center gap-2 text-gray-500'>Write me  <FaArrowRight className=" w-4 h-4  hover:text-blue-600 transition-colors duration-300" />  </Link>
          </div>

          <div className='flex flex-col p-4 bg-white justify-center items-center border-[1px] border-gray-300 w-[40%]'>
            <FaWhatsapp className="text-gray-500 w-8 h-8 hover:text-green-700 transition-colors duration-300" />
            <h1 className='font-semibold'>Whatsapp</h1>
            <p className='text-gray-500 pb-5'>+92-328-6500052</p>
            <a href=' https://wa.me/+923286500052' className='flex items-center gap-2 text-gray-500'>Write me  <FaArrowRight className="text-gray-500 w-4 h-4  hover:text-blue-600 transition-colors duration-300" />  </a>
          </div>

          <div className='flex flex-col p-4 bg-white justify-center items-center border-[1px] border-gray-300 w-[40%] '>
            <FaLinkedin className="text-gray-500 hover:text-blue-800 w-8 h-8" />
            <h1 className='font-semibold'>Linkedin</h1>
            <p className='text-gray-500 pb-5'>Muhammad Raza</p>
            <Link to={"https://www.linkedin.com/in/muhammad-raza-51074820a/"} className='flex items-center text-gray-500 gap-2'>Write me  <FaArrowRight className="text-gray-500 w-4 h-4  hover:text-blue-600 transition-colors duration-300" />  </Link>
          </div>

        </div>
        {/* right div */}
        <div className='flex flex-col items-center text-gray-600 w-full md:pr-10'>
          <h1 className='font-semibold text-xl text-gray-500 '>Write me your project</h1>
          <form onSubmit={handleSubmit} className=" mt-8 max-w-md w-full">
            <div className="mb-4 ">
              <label className="block text-gray-500 absolute bg-gray-100 px-2 ml-5 my-[-7px] ">Name</label>
              <input
                type="text"
                className="w-full py-4 px-4 rounded-xl border-[2px] border-gray-300 rounded mt-1 focus:outline-none  bg-gray-100"
                placeholder="Insert Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 absolute bg-gray-100 px-2 ml-5 my-[-7px]">Email</label>
              <input
                type="email"
                className="w-full py-4 px-4 rounded-xl border-[2px] border-gray-300 rounded mt-1 focus:outline-none bg-gray-100"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 absolute bg-gray-100 px-2 ml-5 my-[-7px] ">Message</label>
              <textarea
                className="w-full py-4 px-4 rounded-xl border-[2px] border-gray-300 rounded mt-1 focus:outline-none  bg-gray-100"
                placeholder="Your Message"
                rows={6}
                onChange={(e) => setMessage(e.target.value)}

              />
            </div>
            <div className='w-[250px]'>
              <button type='submit' className=' bg-gray-700 text-white py-4 px-6 mt-4 rounded-2xl flex justify-center items-center gap-2 text-xl hover:bg-gray-500 transition-colors duration-300'>
                Send Message
                {/* <IoMdDocument className="text-white w-6 h-6 hover:text-gray-600 transition-colors duration-300" /> */}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ---------------------------------------- */}
      {/* Footer */}
      <div className='bg-white flex flex-col gap-8 items-center justify-center w-full '>
        <h1 className='font-bold text-2xl mt-10'>Muhammad Raza</h1>
        <div className='flex gap-5'>
  <Link
    to={"/home2"}
    className='relative text-gray-600 font-semibold transition-colors duration-300 hover:text-gray-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full'
  >
    Home
  </Link>
  <Link
    to={"/about"}
    className='relative text-gray-600 font-semibold transition-colors duration-300 hover:text-gray-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full'
  >
    About
  </Link>
  <Link
    to={"/project"}
    className='relative text-gray-600 font-semibold transition-colors duration-300 hover:text-gray-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full'
  >
    Projects
  </Link>
  <Link
    to={"/contact"}
    className='relative text-gray-600 font-semibold transition-colors duration-300 hover:text-gray-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full'
  >
    Contact
  </Link>
</div>

        <div className="flex justify-center items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-raza-51074820a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white bg-transparent rounded-full transition-all duration-300 hover:bg-blue-700"
          >
            <FaLinkedin className="text-gray-500 text-3xl hover:text-white" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/03006506365"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white bg-transparent rounded-full transition-all duration-300 hover:bg-green-500"
          >
            <FaWhatsapp className="text-gray-500 text-3xl hover:text-white" />
          </a>

          {/* Email */}
          <a
            href="mailto:raza.exe713@gmail.com"
            className="flex items-center justify-center w-12 h-12 text-white bg-transparent rounded-full transition-all duration-300 hover:bg-gray-600"
          >
            <FiMail className="text-gray-500 text-3xl hover:text-white" />
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/s/Eg2G6aD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white bg-transparent rounded-full transition-all duration-300 hover:bg-green-400"
          >
            <SiFiverr className="text-gray-500 text-3xl hover:text-white" />
          </a>
        </div>
        <p className='text-sm'>&copy; {new Date().getFullYear()} Muhammad Raza. All rights reserved.</p>

        {/* <p className='text-sm'>© Muhammad Raza. All rigths reserved</p> */}
      </div>

    </div>

    </>
  )
}




export default Contact