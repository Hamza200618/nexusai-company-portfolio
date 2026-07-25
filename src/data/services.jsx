import React from 'react';

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'High-performance websites and web applications built with cutting-edge technologies. We craft responsive, scalable, and lightning-fast digital experiences.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <polyline points="6 8 8 10 6 12"></polyline>
        <polyline points="18 8 16 10 18 12"></polyline>
        <line x1="12" y1="8" x2="10" y2="12"></line>
      </svg>
    ),
    features: ['React / Next.js', 'Responsive Design', 'Performance Optimized', 'SEO Friendly'],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Autonomous AI agents that learn, reason, and execute complex tasks. Deploy intelligent automation that transforms your business operations.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path>
        <path d="M12 6v6l4 2"></path>
        <path d="M16 21.5V16a4 4 0 0 0-4-4H8"></path>
      </svg>
    ),
    features: ['LLM Integration', 'Autonomous Workflows', 'Real-time Learning', 'API Ready'],
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents with natural language understanding. Provide 24/7 support and engage customers with human-like interactions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <line x1="9" y1="10" x2="15" y2="10"></line>
        <line x1="12" y1="7" x2="12" y2="13"></line>
      </svg>
    ),
    features: ['NLP Powered', 'Multi-language', 'Context Aware', 'Analytics Dashboard'],
  },
  {
    id: 'applications',
    title: 'Applications',
    description: 'Full-stack applications powered by AI integration. From SaaS platforms to enterprise solutions, we build software that scales.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
    features: ['SaaS Platforms', 'Enterprise Grade', 'AI Integration', 'Cloud Native'],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Transform complex data into stunning, interactive visualizations. Make informed decisions with clear, actionable insights at a glance.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
        <line x1="2" y1="20" x2="22" y2="20"></line>
        <circle cx="18" cy="6" r="2"></circle>
        <circle cx="12" cy="10" r="2"></circle>
        <circle cx="6" cy="8" r="2"></circle>
      </svg>
    ),
    features: ['Real-time Dashboards', 'Interactive Charts', 'AI Insights', 'Custom Reports'],
  },
];