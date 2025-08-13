import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about">
          <div className="about-image">
            <img src="/ram.jpg" alt="Ram" width="100%" />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <div className="underline-animate"></div>
            <br />
            <p className="about-text" style={{ textAlign: "justify" }}>
              Hello! I'm Ram, a multidisciplinary developer and designer with
              over 1 year of experience creating digital products that users
              love. My expertise spans across web development, machine learning,
              and UI/UX design.
            </p>
            <p className="about-text" style={{ textAlign: "justify" }}>
              With a background in computer science and a passion for clean,
              efficient code, I bring technical excellence and creative
              problem-solving to every project. I believe in creating solutions
              that not only look great but perform exceptionally well.
            </p>
            <p className="about-text" style={{ textAlign: "justify" }}>
              My approach combines technical precision with aesthetic
              sensibility, ensuring that every project I work on achieves its
              goals while providing an outstanding user experience.
            </p>
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
