import React from 'react'
import { FaUserTie } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Contact from './Contact';
import { IoMdDocument } from 'react-icons/io';






export const About = () => {
  return (
    <div className=" w-screen flex flex-col items-center">
      {/* top Heading Div */}
      <div className='mt-10 text-center'>
      <h1 className='font-bold text-3xl text-gray-500'>About</h1>
      <p className='text-gray-400 text-md'>My Introduction</p>
      </div>
      {/* main content dev */}
        <div className='flex md:flex-row flex-col  w-screen h-full'>
          {/* left div */}
          <div className='flex justify-center items-center w-screen h-full p-4'>
            {/* picture div */}
              <img className='max-w-[300px] max-h-[300px] rounded-lg ' src="aboutpicture.jpeg" alt="" />
          
          </div>
          {/* right div */}
          <div className='flex justify-center items-center w-full h-full md:pr-20'>
              {/* content div */}
              <div className=' flex flex-col items-center pt-10 gap-6'>
                {/* box div */}
                <div className='flex gap-2'>
                    <div className='flex flex-col w-40 justify-center items-center  rounded-lg shadow-md '>
                    <FaUserTie className="bg-gray-200 text-gray-500 w-8 h-8  hover:text-blue-600 transition-colors duration-300" />
                      <p className='font-semibold  pt-2'>Experience</p>
                      <p className=' w-full text-center text-sm text-gray-400'>2+ years working</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 w-40 rounded-lg shadow-md p-4'>
                    <FaCheckCircle className="text-gray-500 w-8 h-8 hover:text-green-800 transition-colors duration-300" />
                    <p className='font-semibold  pt-2'>Completed</p>
                    <p className='text-sm text-gray-400'>5+ Projects</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 w-40 rounded-lg shadow-md p-4'>
                    <FaHeadset className="text-gray-500 w-8 h-8 hover:text-blue-800 transition-colors duration-300" />
                    <p className='font-semibold  pt-2'>Experience</p>
                    <p className='text-sm text-gray-400'>2+ years working</p>
                    </div>
                </div>

                {/* paragraph div */}
                <div className='w-[400px] font-semibold text-gray-500'>
                Frontend developer, I create web pages with UI / UX user interface, I have years of experience in WEB2.0 & WEB3.0 and all of my clients are satisfied with the projects I have delivered.
                </div>
                <div className='w-[250px]'>
                <a className=' bg-gray-700 text-white py-4 px-6 mt-4 rounded-2xl flex justify-center items-center gap-2 text-xl hover:bg-gray-500 transition-colors duration-300' href="/cv/myresume.pdf" download="MYRESUME.pdf">
                        Download CV                       
                        <IoMdDocument className="text-white w-6 h-6 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                </div>

              </div>
          </div>
        </div>

      <div>

      </div>
    </div>
  )
}
export default About

