import React from "react";


const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src="/ram.jpg"
            alt="Portfolio Logo"
            className="h-10 w-10 rounded-full border-2 border-indigo-500 shadow"
          />
          <span className="font-bold text-xl text-indigo-500 tracking-wide">Portfolio</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 font-semibold text-base">
          <a href="#services" className="hover:text-indigo-500 transition-colors">Domains</a>
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden text-2xl text-indigo-500 focus:outline-none" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
