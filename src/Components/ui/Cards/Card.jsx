import React, {useLayoutEffect,  useRef, useState } from 'react';
import { CardLink, CardLinks } from '.'; 
import CardTheme from './CardTheme';
import styled from 'styled-components';

const ANIMATION_OFFSET = 40; 

function Card({children, theme, links = []}) {
  const ref = useRef(); 
  const [animate, setAnimate] = useState(false);
  const {url: primaryUrl, text: primaryText} = links[0];
  
  // TODO: figure out why ssr won't allow styled component here
  const style = { 
    background: theme.color, 
    backgroundImage: `url(${theme.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '10px',
  };

  const onScroll = () => {
    if(ref.current) {
      const { bottom: cardBottom } = ref.current.getBoundingClientRect();
      if (cardBottom - window.innerHeight  + ANIMATION_OFFSET < 0) { 
        setAnimate(true);
      }
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <CardTheme.Provider value={theme}>
      {/* <div className="card" style={{border: `1.5px solid ${color}`}}> */}
      <div className="card" ref={ref}>
        <a  className="body-link" title={primaryText} href={primaryUrl}>
          <div style={style} className="card-body" >
            {children}
          </div>
        </a>
        <CardLinks>
            {links.map(({url, text}) => <CardLink animate={animate} url={url} text={text} key={url}/>)}
        </CardLinks>
      </div>
    </CardTheme.Provider>
  )
}

export default Card;