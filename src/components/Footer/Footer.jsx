import React from "react";
import SocialLinks from "../UI/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-bold text-xl text-indigo-500 mb-2">
            Sai Ram Reddy A V
          </h3>
          <p className="text-gray-600 mb-4">
            Transforming ideas into digital reality with expertise in web
            development, AI, and design.
          </p>
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Let's Connect & Create Together
          </h3>
          <SocialLinks />
        </div>
        <div className="mt-8 text-gray-400 text-sm text-center">
          <p>
            Made with <span className="text-red-500">❤️</span> by Sai Ram Reddy
            A V
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
