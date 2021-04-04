import React from 'react';
import CardTheme from './CardTheme';

function Card({children, color}) {
  console.log(color);
  return (
    <CardTheme.Provider value={color}>
      {/* <div className="card" style={{border: `1.5px solid ${color}`}}> */}
      <div className="card" style={{ background: color.color, backgroundImage: `url(${color.background})`, backgroundSize: 'cover', backgroundPosition: 'centerBottom' }}>
        {children}
      </div>
    </CardTheme.Provider>
  )
}

export default Card;