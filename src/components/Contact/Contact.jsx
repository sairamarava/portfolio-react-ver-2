import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset form after successful submission
        setFormData({ name: '', email: '', service: 'web', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service" className="form-label">Service Interested In</label>
            <select
              id="service"
              className="form-input"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="web">Web Development</option>
              <option value="ai">ML & AI Solutions</option>
              <option value="design">UI/UX Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              className="form-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-glossy">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;