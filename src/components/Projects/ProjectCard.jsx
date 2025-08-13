import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, category, image, link } = project;

  return (
    <div className="project-card" onClick={() => window.open(link, '_blank')}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;