import React from "react";

const TechCard = ({ title, skills }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 mb-4">
      <div className="font-bold text-indigo-500 text-lg mb-2">{title}</div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-50 transition-colors duration-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechCard;
