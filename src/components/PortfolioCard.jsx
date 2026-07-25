import React from 'react';
import Button from './Button';
import './PortfolioCard.scss';

const PortfolioCard = ({ item }) => {
  // Generate a deterministic color based on the URL
  const getDomainColor = (url) => {
    const hash = url.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ['#00d4ff', '#8b5cf6', '#22d3ee', '#f472b6', '#f59e0b', '#34d399'];
    return colors[hash % colors.length];
  };

  const domainColor = getDomainColor(item.url);
  const domain = new URL(item.url).hostname.replace('www.', '');

  return (
    <div
      className="portfolio-card"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      {/* ── Thumbnail / Placeholder ── */}
      <div className="portfolio-card__image">
        <div
          className="portfolio-card__placeholder"
          style={{ '--domain-color': domainColor }}
        >
          <div className="portfolio-card__placeholder-bg" />
          <div className="portfolio-card__placeholder-content">
            <span className="portfolio-card__domain">{domain}</span>
            <span className="portfolio-card__initial">{item.title.charAt(0)}</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="portfolio-card__overlay">
          <div className="portfolio-card__overlay-content">
            <span className="portfolio-card__overlay-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <span className="portfolio-card__overlay-text">Visit Website</span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="portfolio-card__content">
        <div className="portfolio-card__category">
          <span className="tag">{item.category}</span>
        </div>

        <h3 className="portfolio-card__title">{item.title}</h3>
        <p className="portfolio-card__description">{item.description}</p>

        {/* Tech Stack */}
        <div className="portfolio-card__tech">
          <span className="portfolio-card__tech-label">Tech Stack</span>
          <div className="portfolio-card__tech-list">
            {item.techStack.map((tech) => (
              <span key={tech} className="portfolio-card__tech-item">{tech}</span>
            ))}
          </div>
        </div>

        {/* Visit Button */}
        <div className="portfolio-card__actions">
          <Button
            variant="primary"
            size="sm"
            href={item.url}
          >
            Visit Website
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;