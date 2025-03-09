import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    { title: 'Project One', description: 'Detailed description of Project One. This includes technologies used, features, and challenges faced during development.' },
    { title: 'Project Two', description: 'Detailed description of Project Two. Includes key functionalities and user impact.' },
    { title: 'Project Three', description: 'Detailed description of Project Three. This project was built using React and Tailwind CSS.' },
    { title: 'Project Four', description: 'Detailed description of Project Four. A full-stack application with authentication and data management features.' },
  ];

  // ✅ Fixed function
  const functionCall = (title) => {
    setSelectedProject(projectList.find((p) => p.title === title)); // Open modal
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-700 tracking-wide">Projects</h1>
        <p className="text-gray-500 text-lg mt-2">A Showcase of My Work</p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
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
            <p className="mt-2 text-gray-700">{project.description.substring(0, 50)}...</p>

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
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-3xl font-bold text-gray-700">{selectedProject.title}</h2>
            <p className="mt-3 text-gray-600">{selectedProject.description}</p>

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
