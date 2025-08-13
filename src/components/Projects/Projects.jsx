import React from "react";
import ProjectCard from "./ProjectCard";
import { projects as projectsData } from "../../data/projects";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title animated-pop">Recent Projects</h2>
        <p className="section-subtitle animated-pop delay">
          A showcase of my recent work across different domains
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
