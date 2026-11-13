import React from 'react';

function Section({ id, title, icon: Icon, tone = 'light', children }) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="section__inner">
        <h2 className="section__title">
          {Icon && <Icon aria-hidden="true" />}
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
