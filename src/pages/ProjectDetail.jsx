import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { getProjectById } from '../data/projects';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="project-detail">
        <Section id="not-found" background="gradient" fullWidth>
          <div className="project-detail__not-found container">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Button variant="primary" to="/projects">Back to Projects</Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero */}
      <Section id="project-hero" background="gradient" fullWidth>
        <div className="project-hero container">
          <div className="project-hero__content" data-aos="fade-up">
            <Link to="/projects" className="project-hero__back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Projects
            </Link>
            <span className="section-label">{project.category}</span>
            <h1 className="section-title">{project.title}</h1>
            <p className="section-description">{project.description}</p>
          </div>
        </div>
      </Section>

      {/* Video Placeholder */}
      <Section id="project-video">
        <div className="project-video" data-aos="fade-up">
          <div className="project-video__placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Demo Video Placeholder</span>
            <p className="project-video__hint">Replace this with the actual demo video</p>
          </div>
        </div>
      </Section>

      {/* Project Info */}
      <Section id="project-info">
        <div className="project-info" data-aos="fade-up">
          <div className="project-info__main">
            <h2>About This Project</h2>
            <p>{project.fullDescription}</p>

            <h2>Key Features</h2>
            <ul className="project-info__features">
              {project.features.map((feature, index) => (
                <li key={index}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-info__sidebar">
            <div className="project-info__card">
              <h3>Technologies Used</h3>
              <div className="project-info__tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-info__card">
              <h3>Project Links</h3>
              <div className="project-info__actions">
                <Button variant="primary" size="sm" href={project.link || '#'}>
                  Live Demo
                </Button>
                <Button variant="secondary" size="sm" to="/contact">
                  Get Similar Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetail;