import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [

    {
      "title": "Target.live",
      "description": "Target.live is a cutting-edge live streaming platform that allows users to broadcast and watch live events seamlessly. Built with a focus on real-time interaction, it features low-latency streaming, chat integration, and user-friendly interfaces for both streamers and viewers.",
      "vercelLink": "https://targets.primehouzz.com/"
    },
    {
      "title": 'Khat Al Jazeera ',
      "description": 'Khat Al Jazeera is a modern and user-friendly car auction platform designed for seamless bidding and vehicle listing. Built using React for frontend and Django for backend, the platform ensures a responsive and visually appealing experience. It offers features such as real-time auction updates, secure user authentication, and an intuitive interface for buyers and sellers to engage efficiently.',
      "vercelLink": 'https://khataljazeeraauction.com/'

    },
    {
      "title": "DSquare Bytes",
      "description": "A powerful and user-friendly Income Tax Calculator designed to help users estimate their tax liabilities efficiently. This full-stack application features real-time tax calculations, intuitive data management, and secure authentication. It supports multiple tax brackets, deductions, and exemptions to provide accurate results based on the latest tax regulations.",
      "vercelLink": "https://income-tax-calculator-weld.vercel.app/?year=2023-2024"
    },
    
    {
      "title": 'Car Hub',
      "description": 'The Rental Car Website is a fully responsive web application designed to streamline the car rental process for users and businesses. It features an intuitive user interface, real-time vehicle availability, secure booking management, and seamless payment integration.',
      "vercelLink": 'https://rental-car-website-ten.vercel.app/'
    },
    {
      "title": "CloudSync",
      "description": "CloudSync is a sleek and responsive weather application that provides real-time weather updates for any city worldwide. Users can search for a location to view current temperature, humidity, wind speed, and weather conditions with an intuitive and visually appealing interface. The app dynamically adjusts its background for a seamless user experience across all devices.",
      "vercelLink": "https://weather-application-sandy-two.vercel.app/?city="
    },
    
    
  ];

  // ✅ Fixed function
  const functionCall = (title) => {
    setSelectedProject(projectList.find((p) => p.title === title)); // Open modal
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12">
      {/* Page Header */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 tracking-wide">Projects</h1>
        <p className="text-gray-500 text-base sm:text-lg mt-2">A Showcase of My Work</p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 lg:px-20">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 hover:scale-105 relative cursor-pointer"
            onClick={() => functionCall(project.title)}
          >

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-xl transition duration-300 pointer-events-none"></div>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-gray-600 transition duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="mt-2 text-gray-700 text-sm sm:text-base">{project.description.substring(0, 60)}...</p>

            {/* CTA Button (Click Anywhere on Card Now Works) */}
            <button
              className="mt-4  text-gray-500 px-4 py-2 rounded-md font-semibold cursor-pointer  transition duration-300"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* Project Details Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white p-5 sm:p-6 rounded-lg shadow-lg max-w-lg w-full relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">{selectedProject.title}</h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">{selectedProject.description}</p>

            {/* Vercel Link */}
            {selectedProject.vercelLink && (
              <a
                href={selectedProject.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Live Project
              </a>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
            >
              ✕
            </button>
          </div>
        </div>


      )}
    </div>
  );
};

export default Projects;


















// import React, { useState } from 'react';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projectList = [
//     { title: 'Project One', description: 'Detailed description of Project One. This includes technologies used, features, and challenges faced during development.' },
//     { title: 'Project Two', description: 'Detailed description of Project Two. Includes key functionalities and user impact.' },
//     { title: 'Project Three', description: 'Detailed description of Project Three. This project was built using React and Tailwind CSS.' },
//     { title: 'Project Four', description: 'Detailed description of Project Four. A full-stack application with authentication and data management features.' },
//   ];

//   // ✅ Fixed function
//   const functionCall = (title) => {
//     console.log(`Function is Calling for ${title}`);
//     alert(`Function is Calling for ${title}`); // Test if alert appears
//     setSelectedProject(projectList.find((p) => p.title === title)); // Open modal
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12">
//       {/* Page Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-gray-700 tracking-wide">Projects</h1>
//         <p className="text-gray-500 text-lg mt-2">A Showcase of My Work</p>
//       </div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
//         {projectList.map((project, index) => (
//           <div
//             key={index}
//             className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 hover:scale-105 group"
//           >
//             {/* Animated Overlay */}
//             <div className=""></div>

//             {/* Project Title */}
//             <h3 className="text-2xl font-semibold text-gray-600 transition duration-300">
//               {project.title}
//             </h3>

//             {/* Project Description */}
//             <p className="mt-2 text-gray-700">{project.description.substring(0, 50)}...</p>

//             {/* CTA Button */}
//             <button
//               onClick={() => functionCall(project.title)}
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-blue-700 transition duration-300"
//             >
//               View Details →
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Project Details Popup */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//           >
//             <h2 className="text-3xl font-bold text-gray-700">{selectedProject.title}</h2>
//             <p className="mt-3 text-gray-600">{selectedProject.description}</p>

//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;
