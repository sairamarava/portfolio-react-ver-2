import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import VideoSlideshow from './components/VideoSlideshow/VideoSlideshow';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
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