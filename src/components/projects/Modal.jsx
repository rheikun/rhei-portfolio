import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 max-w-lg relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Project Name */}
        <h2 className="text-2xl font-bold mb-4 text-center">{project.name}</h2>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover rounded mb-4"
        />

        {/* Project Description */}
        <p className="text-gray-300">{project.modals}</p>


        {/* GitHub Button */}
        <div className="text-center mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Go To GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
