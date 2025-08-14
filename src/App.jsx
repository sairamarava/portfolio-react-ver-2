import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import VideoSlideshow from "./components/VideoSlideshow/VideoSlideshow";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-gray-100 min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <div className="fixed top-4 right-4 z-50">
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded shadow hover:bg-indigo-600 transition"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <VideoSlideshow />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
