import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-3 text-indigo-500">{icon}</div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-center text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
