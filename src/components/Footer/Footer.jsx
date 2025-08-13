import React from 'react';
import SocialLinks from '../UI/SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title text-center">Sai Ram Reddy A V</h3>
            <p className="text-center">
              Transforming ideas into digital reality with expertise in web
              development, AI, and design.
            </p>
            <h3 className="footer-title text-center mt-8 mb-8">Let's Connect & Create Together</h3>
            <SocialLinks />
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with ❤️ by Sai Ram Reddy A V</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;