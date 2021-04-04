import React, { useContext } from 'react';
import CardTheme from './CardTheme';

function CardLink({text, url}) {
  const color = useContext(CardTheme);
  return (
    <a className="card-link" href={url}  style={{ border: `2px solid #104392`, color: '#104392' }}>
      {text}
    </a>
  );
}

export default CardLink;