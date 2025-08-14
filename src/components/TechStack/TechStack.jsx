import React from "react";
import { techStack as techStackData } from "../../data/techStack";
import TechCard from "./TechCard";

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 mb-2">
          Tech Stack
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Have experience in the following technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStackData.map((tech) => (
            <TechCard
              key={tech.title}
              title={tech.title}
              skills={tech.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
