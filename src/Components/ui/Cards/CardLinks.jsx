import React from 'react';

export default function CardLinks({children}) {
  return(
    <div className="card-links">
      <div className="link-wrapper">
        {children}
      </div>
    </div>
  )
}