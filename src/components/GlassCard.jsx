import React from 'react';
import './GlassCard.scss';

const GlassCard = ({
  children,
  variant = 'premium',
  glow = 'primary',
  className = '',
  hover = true,
  ...props
}) => {
  const classes = [
    'glass-card',
    `glass-card--${variant}`,
    `glass-card--glow-${glow}`,
    hover ? 'glass-card--hover' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;