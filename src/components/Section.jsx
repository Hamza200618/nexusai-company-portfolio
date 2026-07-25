import React from 'react';
import './Section.scss';

const Section = ({
  children,
  id,
  className = '',
  background = 'default',
  fullWidth = false,
  ...props
}) => {
  const classes = [
    'section-wrapper',
    `section-wrapper--${background}`,
    fullWidth ? 'section-wrapper--full' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes} {...props}>
      <div className={fullWidth ? '' : 'container'}>
        {children}
      </div>
    </section>
  );
};

export default Section;