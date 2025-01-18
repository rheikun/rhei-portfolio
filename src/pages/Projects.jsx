import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/projects/Filters";
import Modal from "../components/projects/Modal"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    setFilteredProjects(
      selectedTag === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(selectedTag))
    );
    setAnimationKey((prev) => prev + 1);
  }, [selectedTag]);

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  const handleViewDetails = (project) => setSelectedProject(project);

  return (
    <div id="projects" className="bg-black text-white min-h-screen pt-20">
      <Navbar />
      <section className="max-w-screen-lg mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-14 text-center">
          My <span className="text-yellow-500">Projects</span>
        </h1>

        {/* Filter Buttons */}
        <div>
          <Filters selectedTag={selectedTag} onFilterChange={handleFilterChange} />
        </div>

        {/* Project Cards */}
        <div
          key={animationKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity opacity-0 animate-fade-in"
          data-aos="fade-up"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-transform duration-500 hover:scale-105 flex flex-col h-full"
              onClick={() => handleViewDetails(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.tags.join(", ")}</p>
              
              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-semibold hover:bg-yellow-600 transition duration-300 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                Go To GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </div>
  );
};

export default Projects;
