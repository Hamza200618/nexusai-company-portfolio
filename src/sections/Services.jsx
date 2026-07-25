import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import './Services.scss';

const Services = () => {
  return (
    <Section id="services" background="premium">
      <div className="services-section">
        <SectionTitle
          label="Our Expertise"
          title="Core Services"
          description="From web development to AI-powered solutions, we deliver cutting-edge technology that drives business growth."
        />

        <div className="services-section__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;