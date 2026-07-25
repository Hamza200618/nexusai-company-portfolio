import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <Section id="about-header" background="gradient" fullWidth>
        <div className="about-header container">
          <div className="about-header__content" data-aos="fade-up">
            <span className="section-label">About Us</span>
            <h1 className="section-title">Pioneering the Future of AI</h1>
            <p className="section-description">
              We are a team of passionate AI engineers, designers, and innovators dedicated to
              building intelligent solutions that transform businesses and improve lives.
            </p>
          </div>
        </div>
      </Section>

      <Section id="about-story">
        <div className="about-story" data-aos="fade-up">
          <div className="about-story__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Built for the AI Revolution</h2>
            <p>
              NexusAI was founded with a singular vision: to make artificial intelligence accessible,
              practical, and transformative for every business. We believe that AI should not be a
              distant future concept but a present-day tool that drives real results.
            </p>
            <p>
              Our team combines deep expertise in machine learning, natural language processing,
              and software engineering to create solutions that are not just intelligent but also
              reliable, scalable, and user-friendly.
            </p>
            <Button variant="primary" to="/contact">Join Our Journey</Button>
          </div>
          <div className="about-story__image">
            <div className="about-story__placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>Team Image Placeholder</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="about-values" background="alt">
        <div className="about-values" data-aos="fade-up">
          <div className="section-label">Our Values</div>
          <h2 className="section-title">What Drives Us</h2>
          <div className="about-values__grid">
            <div className="about-values__card">
              <h3>Innovation</h3>
              <p>Pushing the boundaries of what's possible with AI technology.</p>
            </div>
            <div className="about-values__card">
              <h3>Reliability</h3>
              <p>Building solutions you can trust, every single day.</p>
            </div>
            <div className="about-values__card">
              <h3>Impact</h3>
              <p>Creating measurable results that transform businesses.</p>
            </div>
            <div className="about-values__card">
              <h3>Collaboration</h3>
              <p>Working hand-in-hand with our clients for the best outcomes.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;