import React, {useLayoutEffect,  useRef, useState } from 'react';
import { CardLink, CardLinks } from '.'; 
import CardTheme from './CardTheme';

const ANIMATION_OFFSET = 40; 

function Card({children, theme, links = []}) {
  const ref = useRef(); 
  const [animate, setAnimate] = useState(false);
  const {url: primaryUrl, text: primaryText} = links[0];
  
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
      <div className="card" ref={ref}>
        <a  className="body-link" title={primaryText} href={primaryUrl}>
          <div style={style} className="card-body" >
            {children}
          </div>
        </a>
        <CardLinks>
            {links.map(({url, text, onClick}) => <CardLink animate={animate} url={url} text={text} key={url} onClick={onClick}/>)}
        </CardLinks>
      </div>
    </CardTheme.Provider>
  )
}

export default Card;