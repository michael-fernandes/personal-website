import React, { Suspense, lazy } from 'react';
import {ProjectsModal} from '.'
import { Card, CardDescription, CardTitle, SectionTitle } from '../Components/ui';

import cardContent from '../static/cardContent';
import '../Styles/Projects.css';
import '../Styles/Card.css';

import {createContext} from 'react';

const ProjectsContext = createContext({});

const lazyCards = ['left', 'right'];

const Content = () => {
  return (
    <>
      <ProjectsModal />
      <ProjectsContext.Provider value={{}} >
        <div className="projects">
          <SectionTitle >
            Projects
          </SectionTitle>
          <div className="card-grid">
            {cardContent.map(({style, title, description, links}) => (
              <div className="card-wrapper">
                <Card theme={style} links={links} key={title} />
                <div className="card-description-wrapper">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProjectsContext.Provider>
    </>
  );
};

const Lazy = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: () => <Content /> });
  }, 800);
}));

const Fallback = () => {
  return (
    <div className="ssc projects">
      <div className="ssc-wrapper ssc-title">
        <div className="ssc-head-line"></div>
      </div>
      <div className="ssc-wrapper ssc-spacer">
        <div className="card-grid">
            {lazyCards.map((key) => (
              <div key={key} className="card-wrapper">
                <a className="body-link">
                  <img className="card" src="https://s3-us-west-2.amazonaws.com/mferns.com/thumb6.png" />
                </a>
                <div className="card-description-wrapper">
                  <div className="ssc-line"></div>
                  <div className="ssc-line"></div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}


export default function Projects() {
  return (
    <Suspense fallback={<Fallback />}>
      <Lazy />
    </Suspense>
  );
}
