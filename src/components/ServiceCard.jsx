import React, { useRef, useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './ServiceCard.scss';

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Vanilla Tilt
  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        transition: true,
      });
    }

    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  // Mouse-follow glow
  const handleMouseMove = (e) => {
    if (!glowRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.setProperty('--mouse-x', `${x}px`);
    glowRef.current.style.setProperty('--mouse-y', `${y}px`);
    glowRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      className="service-card"
      ref={cardRef}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse-follow glow */}
      <div className="service-card__mouse-glow" ref={glowRef} />

      {/* Floating animation wrapper */}
      <div className="service-card__float" style={{ animationDelay: `${index * 0.3}s` }}>
        {/* Icon */}
        <div className="service-card__icon-wrapper">
          <div className="service-card__icon-bg" />
          <div className="service-card__icon">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__description">{service.description}</p>

        {/* Features list */}
        {service.features && (
          <ul className="service-card__features">
            {service.features.map((feature, i) => (
              <li key={i}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Corner glow accents */}
      <div className="service-card__corner service-card__corner--tl" />
      <div className="service-card__corner service-card__corner--tr" />
      <div className="service-card__corner service-card__corner--bl" />
      <div className="service-card__corner service-card__corner--br" />
    </div>
  );
};

export default ServiceCard;