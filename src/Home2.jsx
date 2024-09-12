import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'; // Feather icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'


const Home2 = () => {
    return (
        // mainDiv
        <div className=' md:mt-40 flex flex-col-reverse md:flex-col lg:flex-row'>
        {/* Right Div (Picture Div) */}
        <div className=' flex justify-center items-center h-full w-full md:order-1 p-6'>
            {/* Images Div */}
            <div className=' w-full flex justify-center'>
                <img className='w-48 h-48 md:w-72 md:h-72 rounded-md  object-fit' src="homeImages.jpg" alt="Profile" />
            </div>
        </div>
    
        {/* Left Div */}
        <div className=' flex items-center justify-center md:gap-20 gap-10 h-full w-full p-6'>
            {/* Icons Div */}
            <div className='flex items-center'>
                <div className='flex flex-row flex-col gap-4 '>
                    <FaGithub className="text-gray-800 w-8 h-8 hover:text-gray-600 transition-colors duration-300" />
                    <FaLinkedin className="text-blue-600 w-8 h-8 hover:text-blue-800 transition-colors duration-300" />
                </div>
            </div>
            {/* Content Div */}
            <div className='flex md:ml-5 flex-col gap-4 text-center md:text-left'>
                <div>
                    <h1 className='md:text-3xl text-2xl'>Welcome to <span className='font-bold text-gray-700'>Muhammad Raza</span></h1>
                </div>
                <div>
                    <p className='font-semibold text-gray-500 text-lg max-w-[400px]'>I'm a creative developer based in Dubai, and I'm very passionate and dedicated to my work.</p>
                </div>
                <div className='flex justify-center md:justify-start gap-4'>
                    <Link className='bg-gray-700 text-white py-4 px-6 mt-4 rounded-2xl flex justify-center items-center gap-2 text-xl hover:bg-gray-500 transition-colors duration-300' to={"/contact"}>
                        Say Hello
                        <FiPhone className="text-white mt-1 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    


    )
}

export default Home2