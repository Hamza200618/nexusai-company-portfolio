import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import DemoCard from '../components/DemoCard';
import { demos, demoCategories } from '../data/demos';
import './Demos.scss';

const Demos = () => {
  const [activeCategory, setActiveCategory] = useState('AI Agents');
  const [filteredDemos, setFilteredDemos] = useState(
    demos.filter((d) => d.category === 'AI Agents')
  );
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll('.demo-card');

    gsap.to(items, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        const newItems = demos.filter((d) => d.category === activeCategory);
        setFilteredDemos(newItems);

        requestAnimationFrame(() => {
          const newElements = gridRef.current?.querySelectorAll('.demo-card');
          if (newElements) {
            gsap.fromTo(
              newElements,
              { opacity: 0, y: 30, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
            );
          }
        });
      },
    });
  }, [activeCategory]);

  return (
    <Section id="demos" background="premium">
      <div className="demos-section">
        <SectionTitle
          label="Interactive Demos"
          title="AI Agents / Chatbots / Applications / CRM"
          description="Explore our cutting-edge AI solutions. Each demo showcases real-world applications of artificial intelligence."
        />

        {/* Category Tabs */}
        <div className="demos-section__tabs">
          {demoCategories.map((cat) => (
            <button
              key={cat}
              className={`demos-section__tab ${activeCategory === cat ? 'demos-section__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              <span className="demos-section__tab-count">
                {demos.filter((d) => d.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="demos-section__grid" ref={gridRef}>
          {filteredDemos.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Demos;