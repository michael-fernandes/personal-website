import React, { useContext } from 'react';

function CardDescription({children}) {
  return (
    <p className="card-description" >
      {children}
    </p>
  );
}

export default CardDescription;