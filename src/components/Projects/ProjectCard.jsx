import React from "react";

const ProjectCard = ({ project }) => {
  const { title, category, image, link } = project;

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
      onClick={() => window.open(link, "_blank")}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{category}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-indigo-600 transition duration-300 text-center"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
