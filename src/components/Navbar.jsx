import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import './Navbar.scss';

const navLinks = [
  { path: '/', label: 'Home', sectionId: 'hero' },
  { path: '#about', label: 'About', sectionId: 'about-section' },
  { path: '#projects', label: 'Projects', sectionId: 'stats' },
  { path: '#contact', label: 'Contact', sectionId: 'contact-section' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (link.path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    // Scroll to section on home page
    if (location.pathname === '/') {
      const section = document.getElementById(link.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home then scroll after render
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(link.sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${isScrolled || isMenuOpen ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--open' : ''}`}
    >
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/logo.jpeg"
            alt="NexusAI"
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">NexusAI</span>
        </Link>

        <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' && activeSection === link.sectionId
                : activeSection === link.sectionId;
              return (
                <li key={link.sectionId}>
                  <a
                    href={link.path === '/' ? '/' : link.path}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    data-section={link.sectionId}
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    <span className="navbar__link-indicator"></span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar__actions">
            <a
              href="#contact"
              className="btn btn--primary btn--sm"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const section = document.getElementById('contact-section');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="btn__text">Let's Talk</span>
            </a>
          </div>
        </div>

        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;