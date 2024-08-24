import React from 'react'

const Home = () => {
  return (
    <div className="w-screen relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-photo.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm Muhammad Raza</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          A passionate developer crafting elegant and efficient solutions.
        </p>
        <div className='flex gap-2'>

        <a href="/projects" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium">
          View Projects
        </a>
        <a href="/contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium">
          Contact Me
        </a>
        </div>
      </div>
    </div>
  )
}

export default Home