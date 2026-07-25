import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import MagneticButton from '../components/MagneticButton';
import './ContactSection.scss';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nexusai26/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nexusaihq?igsh=MWxuNjZkc2thaTE1dw==',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content entrance
      gsap.fromTo(
        sectionRef.current?.querySelector('.contact-content'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Icon stagger
      const icons = iconsRef.current?.querySelectorAll('.contact-social__link');
      if (icons) {
        gsap.fromTo(
          icons,
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            scrollTrigger: {
              trigger: iconsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Floating animation on the glow orbs
      gsap.to('.contact-orb', {
        y: -15,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="contact-section" background="premium">
      <div className="contact-section" ref={sectionRef}>
        {/* Glow orbs */}
        <div className="contact-orb contact-orb--1" />
        <div className="contact-orb contact-orb--2" />

        <div className="contact-content" data-aos="fade-up">
          <SectionTitle
            label="Get in Touch"
            title="Let's Build the Future Together"
            description="Ready to transform your business with AI? Reach out and let's discuss how NexusAI can help you achieve more."
          />

          {/* ── Email CTA ── */}
          <div className="contact-cta">
            <div className="contact-cta__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="contact-cta__title">Send us an email</h3>
            <p className="contact-cta__text">
              Have a project in mind? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours.
            </p>
            <MagneticButton href="mailto:nexusaihq26@gmail.com" className="contact-cta__btn">
              nexusaihq26@gmail.com
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </MagneticButton>
          </div>

          {/* ── Social Icons ── */}
          <div className="contact-social" ref={iconsRef}>
            <p className="contact-social__label">Follow us on social media</p>
            <div className="contact-social__links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="contact-social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="contact-social__icon">{social.icon}</span>
                  <span className="contact-social__name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;