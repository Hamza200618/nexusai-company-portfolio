import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import MagneticButton from '../components/MagneticButton';
import { aboutSteps } from '../data/aboutData.jsx';
import './AboutSection.scss';

gsap.registerPlugin(ScrollTrigger);

// Animated Counter Hook
const useCountUp = (target, duration = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current || counted.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        counted.current = true;
        const start = 0;
        const increment = target / (duration * 60);
        let current = start;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [target, duration]);

  return { count, ref };
};

// Counter Item
const CounterItem = ({ value, suffix, label }) => {
  const { count, ref } = useCountUp(value);

  return (
    <div className="about-counter" ref={ref}>
      <span className="about-counter__number">
        {count}{suffix}
      </span>
      <span className="about-counter__label">{label}</span>
    </div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Content fade in ──
      gsap.fromTo(
        sectionRef.current?.querySelector('.about-content'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // ── Timeline items stagger ──
      const timelineItems = timelineRef.current?.querySelectorAll('.about-timeline__item');
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.25,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ── Floating graphics ──
      gsap.to('.about-float--1', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to('.about-float--2', {
        y: 15,
        duration: 4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about-section" background="premium">
      <div className="about-section" ref={sectionRef}>
        {/* ═══ Intro Content ═══ */}
        <div className="about-content" data-aos="fade-up">
          <div className="about-content__text">
            <SectionTitle
              label="About NexusAI"
              title="Pioneering the Future of Artificial Intelligence"
              description="We are a team of passionate AI engineers, designers, and innovators dedicated to building intelligent solutions that transform businesses and improve lives."
              align="left"
            />
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
            <MagneticButton to="#contact-section" className="hero__btn hero__btn--primary" style={{ padding: '12px 28px', fontSize: '14px', fontWeight: 600, borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em', textDecoration: 'none', background: 'linear-gradient(135deg, #00f0ff, #7b2ff7)', color: '#fff', boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Join Our Mission</span>
            </MagneticButton>
          </div>

          <div className="about-content__visual">
            <div className="about-content__graphic">
              {/* Floating elements */}
              <div className="about-float about-float--1">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="about-float about-float--2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              {/* Glow orb */}
              <div className="about-content__orb" />
              {/* Grid pattern */}
              <div className="about-content__grid" />
              <div className="about-content__center-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Mission, Vision, Innovation ═══ */}
        <div className="about-pillars" data-aos="fade-up">
          <div className="about-pillar">
            <div className="about-pillar__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>To democratize AI technology and empower every business with intelligent solutions that drive growth, efficiency, and innovation.</p>
          </div>

          <div className="about-pillar">
            <div className="about-pillar__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>A world where AI seamlessly integrates into every aspect of business, making technology invisible and intelligence universal.</p>
          </div>

          <div className="about-pillar">
            <div className="about-pillar__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Innovation Mindset</h3>
            <p>We constantly push boundaries, experimenting with cutting-edge technologies to deliver solutions that are ahead of the curve.</p>
          </div>
        </div>

        {/* ═══ Animated Counters ═══ */}
        <div className="about-counters" data-aos="fade-up">
          <CounterItem value={50} suffix="+" label="Projects Delivered" />
          <CounterItem value={30} suffix="+" label="Team Members" />
          <CounterItem value={98} suffix="%" label="Client Satisfaction" />
          <CounterItem value={24} suffix="/7" label="Support Available" />
        </div>

        {/* ═══ Growth Timeline ═══ */}
        <div className="about-timeline" ref={timelineRef}>
          <SectionTitle
            label="Our Journey"
            title="Growth Timeline"
            description="From a bold vision to a thriving AI company — our journey of innovation and impact."
          />
          <div className="about-timeline__track">
            <div className="about-timeline__line" />
            {aboutSteps.map((step, index) => (
              <div key={step.year} className="about-timeline__item">
                <div className="about-timeline__marker">
                  <span className="about-timeline__dot" />
                  <span className="about-timeline__year">{step.year}</span>
                </div>
                <div className="about-timeline__card">
                  <div className="about-timeline__icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;