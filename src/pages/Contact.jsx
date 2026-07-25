import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <Section id="contact-header" background="gradient" fullWidth>
        <div className="contact-header container">
          <div className="contact-header__content" data-aos="fade-up">
            <span className="section-label">Get in Touch</span>
            <h1 className="section-title">Let's Build Something Amazing</h1>
            <p className="section-description">
              Ready to transform your business with AI? Reach out and let's discuss how we can help.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact-form">
        <div className="contact-form" data-aos="fade-up">
          <div className="contact-form__info">
            <div className="contact-form__info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@nexusai.com">hello@nexusai.com</a>
              </div>
            </div>
            <div className="contact-form__info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="contact-form__info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="contact-form__social">
              <h4>Follow Us</h4>
              <div className="contact-form__social-links">
                <a href="https://www.linkedin.com/company/nexusai26/" target="_blank" rel="noopener noreferrer" className="contact-form__social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/nexusaihq" target="_blank" rel="noopener noreferrer" className="contact-form__social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form__form">
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="contact-form__field">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="contact-form__field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" />
            </div>
            <div className="contact-form__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
            </div>
            <Button variant="primary" size="lg" type="submit">Send Message</Button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;