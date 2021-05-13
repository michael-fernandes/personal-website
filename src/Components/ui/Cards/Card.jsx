import React from 'react';
import { CardTheme } from '.'; 

const ANIMATION_OFFSET = 40; 



function Card({theme, links = []}) {
  const {url: primaryUrl, text: primaryText} = links[0];

  return (
    <CardTheme.Provider value={theme}>
      <a  className="body-link" title={primaryText} href={primaryUrl}>
        <img className="card" src={theme.background} loading='lazy' />
        <div className="card-overlay"> 
          <div className="centered-text">
            Visit Project →
          </div>
        </div>
      </a>
    </CardTheme.Provider>
  )
}

export default Card;

