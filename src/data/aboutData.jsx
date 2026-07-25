import React from 'react';

export const aboutSteps = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'NexusAI was founded with a vision to democratize artificial intelligence and make it accessible to businesses of all sizes.',
    count: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    year: '2024',
    title: 'First Breakthroughs',
    description: 'Launched our first AI agent platform and secured partnerships with leading tech companies across multiple industries.',
    count: 5,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    year: '2025',
    title: 'Scaling Innovation',
    description: 'Expanded our team to 30+ experts, delivered 50+ projects, and achieved 98% client satisfaction rate.',
    count: 50,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    year: '2026',
    title: 'Global Impact',
    description: 'Building the future of AI with cutting-edge solutions that empower businesses worldwide to achieve more.',
    count: 100,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: 30, suffix: '+', label: 'Team Members', icon: '👥' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: '🔧' },
];