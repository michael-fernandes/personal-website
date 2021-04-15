import React from 'react';
import { CardLink, CardLinks } from '.'; 
import CardTheme from './CardTheme';
import styled from 'styled-components';

const CardBody = styled.div`
  background: ${props => props.color};
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  padding: 10px;
`;

function Card({children, theme, links = []}) {
  const {url: primaryUrl, text: primaryText} = links[0];

  return (
    <CardTheme.Provider value={theme}>
      {/* <div className="card" style={{border: `1.5px solid ${color}`}}> */}
      <div className="card">
        <a  className="body-link" title={primaryText} href={primaryUrl}>
          <CardBody className="card-body" color={theme.color} background={theme.background}>
            {children}
          </CardBody>
        </a>
        <CardLinks>
            {links.map(({url, text}) => <CardLink url={url} text={text}/>)}
        </CardLinks>
      </div>
    </CardTheme.Provider>
  )
}

export default Card;