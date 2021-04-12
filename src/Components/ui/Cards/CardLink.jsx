import React, { useContext } from 'react';
import CardTheme from './CardTheme';

function CardLink({text, url}) {
  const { color } = useContext(CardTheme);

  return (
    <a className="card-link" href={url}  style={{ border: `2px solid ${color}`, color: `${color}` }}>
      {text}
    </a>
  );
}

export default CardLink;