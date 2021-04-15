import React from 'react';
import { CardLink, CardLinks } from '.'; 
import CardTheme from './CardTheme';
import styled from 'styled-components';

function Card({children, theme, links = []}) {
  const {url: primaryUrl, text: primaryText} = links[0];

 const style = { // TODO: figure out why ssr won't allow styled component here
   backgroundImage: `url(${theme.background})`,
   background: theme.color, 
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   padding: '10px',
 }

  return (
    <CardTheme.Provider value={theme}>
      {/* <div className="card" style={{border: `1.5px solid ${color}`}}> */}
      <div className="card">
        <a  className="body-link" title={primaryText} href={primaryUrl}>
          <div style={style} className="card-body" color={theme.color} background={theme.background}>
            {children}
          </div>
        </a>
        <CardLinks>
            {links.map(({url, text}) => <CardLink url={url} text={text}/>)}
        </CardLinks>
      </div>
    </CardTheme.Provider>
  )
}

export default Card;