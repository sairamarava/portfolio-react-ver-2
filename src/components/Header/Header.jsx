import React from "react";

const navLinks = [
  { href: "#services", label: "Domains" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-4">
          <img
            src="/ram.jpg"
            alt="Portfolio Logo"
            className="h-12 w-12 rounded-full border-2 border-indigo-500 shadow-lg object-cover"
          />
          <span className="font-extrabold text-2xl md:text-3xl text-indigo-500 tracking-tight select-none drop-shadow-lg">
            Sai Ram
          </span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-semibold text-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-2 py-1 hover:text-indigo-500 transition-colors duration-200"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
        </nav>
        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          {setDarkMode && (
            <button
              className="bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400 px-3 py-2 rounded-full shadow hover:bg-indigo-50 dark:hover:bg-gray-700 transition flex items-center gap-2"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.294 2.74-7.94 6.652-9.294a.75.75 0 01.948.948A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.596-3.9.75.75 0 01.948-.948c.38-.14.76-.29 1.208-.65z"
                  />
                </svg>
              )}
            </button>
          )}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-indigo-500 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="sr-only">Open menu</span>☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
