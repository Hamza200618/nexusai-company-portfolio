import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { demos } from '../data/demos';
import './DemoPage.scss';

const DemoPage = () => {
  const { slug } = useParams();
  const demo = demos.find((d) => d.slug === slug);

  if (!demo) {
    return (
      <div className="demo-page">
        <Section id="not-found" background="gradient" fullWidth>
          <div className="demo-page__not-found container">
            <h1>Demo Not Found</h1>
            <p>The demo you're looking for doesn't exist.</p>
            <Button variant="primary" to="/">Back to Home</Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="demo-page">
      {/* ═══ Hero ═══ */}
      <Section id="demo-hero" background="gradient" fullWidth>
        <div className="demo-hero container">
          <div className="demo-hero__content" data-aos="fade-up">
            <Link to="/" className="demo-hero__back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </Link>

            <div className="demo-hero__meta">
              <span className="demo-hero__category">{demo.category}</span>
              <span
                className="demo-hero__status"
                style={{ '--status-color': demo.statusColor }}
              >
                <span className="demo-hero__status-dot" />
                {demo.status}
              </span>
            </div>

            <h1 className="demo-hero__title">{demo.title}</h1>
            <p className="demo-hero__description">{demo.shortDescription}</p>

            <div className="demo-hero__tech">
              {demo.techStack.map((tech) => (
                <span key={tech} className="demo-hero__tech-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ Demo Video ═══ */}
      <Section id="demo-video">
        <div className="demo-video" data-aos="fade-up">
          {demo.videoPlaceholder ? (
            <div className="demo-video__player">
              <video
                src={demo.videoPlaceholder}
                controls
                playsInline
                preload="metadata"
                className="demo-video__video"
                loading="lazy"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="demo-video__placeholder">
              <div className="demo-video__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span className="demo-video__title">Demo Video</span>
              <p className="demo-video__hint">Replace this placeholder with the actual demo video file</p>
              <div className="demo-video__format">
                <span>MP4</span>
                <span>1920×1080</span>
                <span>H.264</span>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* ═══ Project Overview ═══ */}
      <Section id="demo-overview">
        <div className="demo-overview" data-aos="fade-up">
          <div className="demo-overview__main">
            <h2>Project Overview</h2>
            <p>{demo.description}</p>

            <h2>Key Features</h2>
            <ul className="demo-overview__features">
              {demo.features.map((feature, i) => (
                <li key={i}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="demo-overview__sidebar">
            {/* Tech Stack */}
            <div className="demo-overview__card">
              <h3>Technologies</h3>
              <div className="demo-overview__tags">
                {demo.techStack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="demo-overview__card">
              <h3>Project Status</h3>
              <div className="demo-overview__status-bar">
                <div
                  className="demo-overview__status-fill"
                  style={{
                    width: demo.status === 'Production' ? '100%' : '70%',
                    background: demo.statusColor,
                  }}
                />
              </div>
              <span className="demo-overview__status-text" style={{ color: demo.statusColor }}>
                {demo.status}
              </span>
            </div>

            {/* Actions */}
            <div className="demo-overview__card">
              <h3>Actions</h3>
              <div className="demo-overview__actions">
                {demo.liveLink ? (
                  <Button variant="primary" size="sm" href={demo.liveLink}>
                    View
                  </Button>
                ) : (
                  <a
                    href="/"
                    className="btn btn--primary btn--sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById('demos');
                      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    <span className="btn__text">Get Similar Solution</span>
                  </a>
                )}
                <Button variant="secondary" size="sm" to="/">
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ Challenges & Improvements ═══ */}
      <Section id="demo-details" background="alt">
        <div className="demo-details" data-aos="fade-up">
          <div className="demo-details__col">
            <h2>Challenges Solved</h2>
            <ul className="demo-details__list">
              {demo.challenges.map((challenge, i) => (
                <li key={i} className="demo-details__item">
                  <div className="demo-details__icon demo-details__icon--challenge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="demo-details__col">
            <h2>Future Improvements</h2>
            <ul className="demo-details__list">
              {demo.improvements.map((improvement, i) => (
                <li key={i} className="demo-details__item">
                  <div className="demo-details__icon demo-details__icon--improvement">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ═══ Architecture Placeholder ═══ */}
      <Section id="demo-architecture">
        <div className="demo-architecture" data-aos="fade-up">
          <h2>Architecture Diagram</h2>
          <div className="demo-architecture__placeholder">
            <div className="demo-architecture__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M6 8l2 2-2 2"></path>
                <path d="M18 8l-2 2 2 2"></path>
                <line x1="10" y1="8" x2="14" y2="12"></line>
              </svg>
            </div>
            <span>Architecture Diagram Placeholder</span>
            <p>Replace this with the actual architecture diagram</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DemoPage;