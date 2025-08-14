import React from "react";
import ServiceCard from "./ServiceCard";
import { services as servicesData } from "../../data/services";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 mb-2">
          My Services
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Specialized solutions tailored to your needs with expertise in
          multiple domains
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
