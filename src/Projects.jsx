import React from 'react'

const Projects = () => {
    const projectList = [
        { title: 'Project One', description: 'A brief description of Project One.' },
        { title: 'Project Two', description: 'A brief description of Project Two.' },
        { title: 'Project Three', description: 'A brief description of Project Three.' },
        { title: 'Project Three', description: 'A brief description of Project Three.' },

      ];
  return (
    <div className="w-full flex flex-col items-center h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mt-6">My Projects</h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectList.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
          <p className="mt-2 text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects