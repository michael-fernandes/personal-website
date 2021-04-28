import React, { useContext } from 'react';
import CardTheme from './CardTheme';
import styled from 'styled-components';

const Link = styled.a`
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  opacity: ${props => props.animate ? '100%' : '0%'};
  transition: opacity .25s ease;
  &:hover {
    background: ${props => props.color};
    color: white;
    transition: all .45s ease;
  }

  &:active {
    font-weight: 300;
  }
`;

function CardLink({text, url, animate, onClick}) {
  const { color } = useContext(CardTheme);

  if (onClick) {
    return (
      <Link animate={animate} className="card-link" onClick={onClick} color={color}>
        {text}
      </Link>
    );
  }
  return (
    <Link animate={animate} className="card-link" href={url} color={color}>
      {text}
    </Link>
  );
}

export default CardLink;