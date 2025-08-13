import React from "react";
import useTypewriter from "../../hooks/useTypewriter";


const Hero = () => {
  const [text] = useTypewriter("AI & Web Development Expertise");

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-24 pb-12 px-4 text-center">
      <img src="/ram.jpg" alt="Avatar" className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg" />
      <h1 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 mb-4 animate-fade-in">{text}</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto animate-fade-in delay-100">
        Transforming ideas into exceptional digital experiences with cutting-edge technology and creative solutions.
      </p>
      <a href="#contact" className="inline-block bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-indigo-600 transition duration-300 animate-fade-in delay-200">
        Hire Me
      </a>
    </section>
  );
};

export default Hero;
