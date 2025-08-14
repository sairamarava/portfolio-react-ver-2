import React from "react";
import ProjectCard from "./ProjectCard";
import { projects as projectsData } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 mb-2">
          Recent Projects
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          A showcase of my recent work across different domains
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
