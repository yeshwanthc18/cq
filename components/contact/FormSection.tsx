'use client';

import { useState } from 'react';
import './styles/form.css';

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">
            Let&apos;s talk about your <em>next big idea</em>
          </h2>
          <p className="form-subtitle">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="strategy">Brand Strategy</option>
                <option value="content">Content & Copywriting</option>
                <option value="social">Social Media Marketing</option>
                <option value="performance">Performance Marketing</option>
                <option value="full-service">Full-Service Campaign</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and timeline..."
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-solid"
              aria-label="Send your message"
            >
              <span>Send Message</span>
              <span>→</span>
            </button>

            {submitted && (
              <div className="success-message fade-in">
                ✓ Thanks for reaching out! We&apos;ll be in touch soon.
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="form-info">
        <div className="info-item fade-in-up">
          <h3 className="info-title">Email</h3>
          <a href="mailto:hello@crayonandquill.com" className="info-link">
            hello@crayonandquill.com
          </a>
        </div>

        <div className="info-divider" />

        <div className="info-item fade-in-up">
          <h3 className="info-title">Phone</h3>
          <a href="tel:+1234567890" className="info-link">
            +1 (234) 567-890
          </a>
        </div>

        <div className="info-divider" />

        <div className="info-item fade-in-up">
          <h3 className="info-title">Location</h3>
          <p className="info-text">
            Bangalore
            <br />
            Qatar
          </p>
        </div>
      </div>
    </section>
  );
}
