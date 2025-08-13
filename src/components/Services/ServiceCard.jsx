import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="service-icon text-4xl mb-2">{icon}</div>
      <h3 className="service-title text-xl font-semibold mb-2">{title}</h3>
      <p className="service-description text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;