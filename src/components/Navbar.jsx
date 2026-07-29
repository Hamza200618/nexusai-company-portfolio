import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';

const navLinks = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about-section' },
  { label: 'Projects', sectionId: 'stats' },
  { label: 'Contact', sectionId: 'contact-section' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${isScrolled || isMenuOpen ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--open' : ''}`}
    >
      <div className="navbar__container container">
        <a href="/" className="navbar__logo" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img
            src="/logo.jpeg"
            alt="NexusAI"
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">NexusAI</span>
        </a>

        <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    data-section={link.sectionId}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
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
              href="#contact-section"
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