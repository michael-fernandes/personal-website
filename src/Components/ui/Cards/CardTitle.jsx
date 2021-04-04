import React, { useContext } from 'react';
import CardTheme from './CardTheme';

function CardTitle({children}) {
  const color = useContext(CardTheme);

  return (
    <h3 className="card-title" style={{}}>{children}</h3>
  );
}

export default CardTitle;