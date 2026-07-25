import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects-page">
      <Section id="projects-header" background="gradient" fullWidth>
        <div className="projects-header container">
          <div className="projects-header__content" data-aos="fade-up">
            <span className="section-label">Our Work</span>
            <h1 className="section-title">Projects & Case Studies</h1>
            <p className="section-description">
              Explore our portfolio of AI agents, intelligent chatbots, and cutting-edge applications
              that showcase the future of artificial intelligence.
            </p>
          </div>
        </div>
      </Section>

      <Section id="projects-grid">
        <div className="projects-grid" data-aos="fade-up">
          <div className="projects-grid__filters">
            <button className="tag tag--active">All</button>
            <button className="tag">AI Agents</button>
            <button className="tag">AI Chatbots</button>
            <button className="tag">Applications</button>
          </div>

          <div className="projects-grid__list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;