import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import Button from './Button';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.02,
      });
    }

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="project-card" ref={tiltRef} data-aos="fade-up">
      <div className="project-card__image">
        {project.video ? (
          <div className="project-card__video-wrapper">
            <video
              src={project.video}
              poster={project.thumbnail}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
            <div className="project-card__overlay">
              <span className="project-card__play-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
            </div>
          </div>
        ) : (
          <div className="project-card__placeholder">
            <span className="project-card__placeholder-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </span>
          </div>
        )}
        <div className="project-card__category">
          <span className="tag">{project.category}</span>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tags">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="tag">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="project-card__actions">
          <Button
            variant="primary"
            size="sm"
            to={`/projects/${project.id}`}
          >
            Watch Demo
          </Button>
          {project.link && (
            <Button
              variant="secondary"
              size="sm"
              href={project.link}
            >
              Live Site
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;