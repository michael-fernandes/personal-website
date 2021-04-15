import React, { useContext } from 'react';
import CardTheme from './CardTheme';
import styled from 'styled-components';

const Link = styled.a`
  border: 2px solid ${props => props.color};
  color: ${props => props.color};

  &:hover {
    background: ${props => props.color};
    color: white;
    transition: all .45s ease;
  }

  &:active {
    font-weight: 300;
  }
`;

function CardLink({text, url}) {
  const { color } = useContext(CardTheme);

  return (
    <Link className="card-link" href={url} color={color}>
      {text}
    </Link>
  );
}

export default CardLink;