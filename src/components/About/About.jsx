import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src="/ram.jpg"
              alt="Ram"
              className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              About Me
            </h2>
            <div className="w-16 h-1 bg-indigo-500 rounded mb-6"></div>
            <p className="text-gray-700 text-base md:text-lg mb-4 text-justify">
              Hello! I'm Ram, a multidisciplinary developer and designer with
              over 1 year of experience creating digital products that users
              love. My expertise spans across web development, machine learning,
              and UI/UX design.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4 text-justify">
              With a background in computer science and a passion for clean,
              efficient code, I bring technical excellence and creative
              problem-solving to every project. I believe in creating solutions
              that not only look great but perform exceptionally well.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6 text-justify">
              My approach combines technical precision with aesthetic
              sensibility, ensuring that every project I work on achieves its
              goals while providing an outstanding user experience.
            </p>
            <a
              href="#contact"
              className="inline-block bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-600 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
