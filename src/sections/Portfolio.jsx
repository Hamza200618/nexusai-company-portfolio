import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';
import { portfolioItems, portfolioCategories } from '../data/portfolio';
import './Portfolio.scss';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const gridRef = useRef(null);
  const filterRef = useRef(null);
  const indicatorRef = useRef(null);

  // Filter animation
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll('.portfolio-card');

    gsap.to(items, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        // Update items
        const newItems = activeFilter === 'All'
          ? portfolioItems
          : portfolioItems.filter((item) => item.category === activeFilter);
        setFilteredItems(newItems);

        // Re-animate in
        requestAnimationFrame(() => {
          const newElements = gridRef.current?.querySelectorAll('.portfolio-card');
          if (newElements) {
            gsap.fromTo(
              newElements,
              { opacity: 0, y: 30, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
            );
          }
        });
      },
    });
  }, [activeFilter]);

  // Filter indicator position
  useEffect(() => {
    if (!filterRef.current || !indicatorRef.current) return;

    const activeBtn = filterRef.current.querySelector(`[data-filter="${activeFilter}"]`);
    if (activeBtn) {
      const btnRect = activeBtn.getBoundingClientRect();
      const containerRect = filterRef.current.getBoundingClientRect();

      gsap.to(indicatorRef.current, {
        width: btnRect.width,
        x: btnRect.left - containerRect.left,
        duration: 0.4,
        ease: 'power3.out',
      });
    }
  }, [activeFilter]);

  return (
    <Section id="portfolio" background="alt">
      <div className="portfolio-section">
        <SectionTitle
          label="Our Portfolio"
          title="Featured Solutions"
          description="Showcasing our finest work across architecture, restaurant, eCommerce, health, and fashion industries."
        />

        {/* ── Filter Tabs ── */}
        <div className="portfolio-section__filters" ref={filterRef}>
          <div className="portfolio-section__filters-inner">
            <div className="portfolio-section__filter-indicator" ref={indicatorRef} />
            {portfolioCategories.map((category) => (
              <button
                key={category}
                className={`portfolio-section__filter-btn ${activeFilter === category ? 'portfolio-section__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(category)}
                data-filter={category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="portfolio-section__grid" ref={gridRef}>
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* ── Empty State ── */}
        {filteredItems.length === 0 && (
          <div className="portfolio-section__empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio;