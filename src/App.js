import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
// import About from './About';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';
import { useState } from 'react';
import Home2 from './Home2';
import Skills from './Skills';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
    {/* <div className="bg-gray-200 flex flex-col w-screen justify-center items-center "> */}
      {/* -------------------------- */}
      <nav className="bg-gray-100 sticky top-0 z-50 w-full bg-white border-b-[1px]">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="text-xl font-medium text-gray-700 hover:text-blue-600">Frontend Enginner</div>
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
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:gap-8 gap-4 mt-4 md:mt-0">
            <Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/skills" className="text-lg font-medium text-gray-700 hover:text-blue-600">Skills</Link>
            <Link to="/projects" className="text-lg font-medium text-gray-700 hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
      {/* ------------------------- */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path='/' element={<Home2/>}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/skills" element={<Skills />} ></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  </Router>
  );
}

export default App;
