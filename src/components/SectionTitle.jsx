import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({
  label,
  title,
  description,
  align = 'center',
  className = '',
  ...props
}) => {
  const classes = [
    'section-title-component',
    `section-title-component--${align}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {label && <span className="section-label">{label}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionTitle;