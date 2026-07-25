import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.scss';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nexusai26/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nexusaihq?igsh=MWxuNjZkc2thaTE1dw==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const scrollToSection = (sectionId, navigate, location) => (e) => {
  e.preventDefault();
  if (location.pathname === '/') {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="footer__logo" onClick={scrollToSection('hero', navigate, location)}>
              <span className="footer__logo-icon">N</span>
              <span className="footer__logo-text">NexusAI</span>
            </a>
            <p className="footer__description">
              Pioneering the future of artificial intelligence. Building intelligent solutions that transform industries and empower businesses.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul>
              <li><a href="/" className="footer__link" onClick={scrollToSection('hero', navigate, location)}>Home</a></li>
              <li><a href="#about" className="footer__link" onClick={scrollToSection('about-section', navigate, location)}>About Us</a></li>
              <li><a href="#projects" className="footer__link" onClick={scrollToSection('stats', navigate, location)}>Projects</a></li>
              <li><a href="#contact" className="footer__link" onClick={scrollToSection('contact-section', navigate, location)}>Contact</a></li>
            </ul>
          </div>

          <div className="footer__services">
            <h4 className="footer__heading">Services</h4>
            <ul>
              <li><span className="footer__link">Web Development</span></li>
              <li><span className="footer__link">AI Agents</span></li>
              <li><span className="footer__link">AI Chatbots</span></li>
              <li><span className="footer__link">Applications</span></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <ul>
              <li>
                <a href="mailto:nexusaihq26@gmail.com" className="footer__link">
                  nexusaihq26@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/nexusai26/" className="footer__link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nexusaihq" className="footer__link" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} NexusAI. All rights reserved.</p>
          <div className="footer__bottom-links">
            <span className="footer__bottom-link">Privacy Policy</span>
            <span className="footer__bottom-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;