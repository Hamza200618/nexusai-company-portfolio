import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import Button from './Button';
import './DemoCard.scss';

const DemoCard = ({ demo, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 6,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.02,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
      });
    }

    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      className="demo-card"
      ref={cardRef}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Animated Border */}
      <div className="demo-card__border" />

      {/* Content */}
      <div className="demo-card__content">
        {/* Category Badge */}
        <div className="demo-card__header">
          <span className="demo-card__category">{demo.category}</span>
          <span
            className="demo-card__status"
            style={{ '--status-color': demo.statusColor }}
          >
            <span className="demo-card__status-dot" />
            {demo.status}
          </span>
        </div>

        {/* Icon */}
        <div className="demo-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="demo-card__title">{demo.title}</h3>

        {/* Description */}
        <p className="demo-card__description">{demo.shortDescription}</p>

        {/* Tech Stack */}
        <div className="demo-card__tech">
          {demo.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="demo-card__tech-item">{tech}</span>
          ))}
          {demo.techStack.length > 4 && (
            <span className="demo-card__tech-item demo-card__tech-item--more">
              +{demo.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="demo-card__actions">
          <Button
            variant="primary"
            size="sm"
            to={`/demo/${demo.slug}`}
          >
            Watch Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;