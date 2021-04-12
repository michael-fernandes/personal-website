import React from 'react';

function SectionTitle({children, subtitle}) {
  return (
    <div className="titles">
      <h1 className="section-title">{children}</h1>
      <p className="section-subtitle">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;