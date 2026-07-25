import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import MagneticButton from '../components/MagneticButton';
import SectionTitle from '../components/SectionTitle';
import AboutSection from '../sections/AboutSection';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Demos from '../sections/Demos';
import ContactSection from '../sections/ContactSection';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero Entrance Timeline ──
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Section label
      tl.fromTo(
        heroRef.current?.querySelector('.section-label'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      // Title - word by word reveal
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.hero__title-word');
        tl.fromTo(
          chars,
          { opacity: 0, y: 50, rotateX: -20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.12 },
          '-=0.4'
        );
      }

      // Glow pulse on title
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current.querySelector('.hero__title-glow'),
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          '-=0.6'
        );
      }

      // Description
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );

      // Buttons
      tl.fromTo(
        buttonsRef.current?.querySelectorAll('.hero__btn'),
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
        '-=0.3'
      );

      // ── Stats Scroll Animation ──
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stats__item');
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home" ref={heroRef}>
      {/* ═══════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero__ambient-glow hero__ambient-glow--1"></div>
        <div className="hero__ambient-glow hero__ambient-glow--2"></div>
        <div className="hero__ambient-glow hero__ambient-glow--3"></div>

        <div className="container">
          <div className="hero__content">
            <span className="section-label">NexusAI</span>

            <h1 className="hero__title" ref={titleRef}>
              <span className="hero__title-glow"></span>
              <span className="hero__title-word">Building</span>{' '}
              <span className="hero__title-word hero__title-word--gradient">Intelligent</span>{' '}
              <span className="hero__title-word">Digital</span>{' '}
              <span className="hero__title-word">Experiences</span>
            </h1>

            <p className="hero__description" ref={descriptionRef}>
              We craft AI-powered solutions, futuristic applications, high-performance websites,
              and intelligent automation systems for modern businesses.
            </p>

            <div className="hero__actions" ref={buttonsRef}>
              <MagneticButton to="/projects" className="hero__btn hero__btn--primary">
                <span className="hero__btn-text">Explore Our Work</span>
                <span className="hero__btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </MagneticButton>

              <MagneticButton to="/contact" className="hero__btn hero__btn--secondary">
                <span className="hero__btn-text">Contact Us</span>
                <span className="hero__btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                  </svg>
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS SECTION
          ═══════════════════════════════════ */}
      <Section id="stats" background="alt">
        <div className="stats" ref={statsRef}>
          <SectionTitle
            label="Our Impact"
            title="By the Numbers"
            description="Delivering excellence across every project we undertake."
          />
          <div className="stats__grid">
            <div className="stats__item">
              <span className="stats__number">50+</span>
              <span className="stats__label">Projects Delivered</span>
            </div>
            <div className="stats__item">
              <span className="stats__number">30+</span>
              <span className="stats__label">Happy Clients</span>
            </div>
            <div className="stats__item">
              <span className="stats__number">98%</span>
              <span className="stats__label">Client Satisfaction</span>
            </div>
            <div className="stats__item">
              <span className="stats__number">24/7</span>
              <span className="stats__label">Support</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════
          ABOUT NEXUSAI
          ═══════════════════════════════════ */}
      <AboutSection />

      {/* ═══════════════════════════════════
          CORE SERVICES
          ═══════════════════════════════════ */}
      <Services />

      {/* ═══════════════════════════════════
          PORTFOLIO SHOWCASE
          ═══════════════════════════════════ */}
      <Portfolio />

      {/* ═══════════════════════════════════
          AI AGENTS / CHATBOTS / APPLICATIONS
          ═══════════════════════════════════ */}
      <Demos />

      {/* ═══════════════════════════════════
          CONTACT & FOOTER
          ═══════════════════════════════════ */}
      <ContactSection />
    </div>
  );
};

export default Home;