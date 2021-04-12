import React from 'react';
import { CardLink, CardLinks } from '.'; 
import CardTheme from './CardTheme';

function Card({children, color, links}) {
  console.log(color);
  return (
    <CardTheme.Provider value={color}>
      {/* <div className="card" style={{border: `1.5px solid ${color}`}}> */}
      <div className="card">
        <div className="card-body" style={{ background: color.color, backgroundImage: `url(${color.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {children}
        </div>
        <CardLinks>
            {links.map(({url, text}) => <CardLink url={url} text={text}/>)}
        </CardLinks>
      </div>
    </CardTheme.Provider>
  )
}

export default Card;