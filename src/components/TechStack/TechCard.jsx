import React from 'react';

const TechCard = ({ title, skills }) => {
  return (
    <div className="tech-card">
      <div className="ribbon">{title}</div>
      <div className="tech-title">{title}</div>
      <ul className="tech-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechCard;