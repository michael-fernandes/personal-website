import React from 'react';
import {ProjectsModal} from '.'
import { Card, CardDescription, CardTitle, SectionTitle } from '../Components/ui';

import cardContent from '../static/cardContent';
import '../Styles/Projects.css';
import '../Styles/Card.css';

import {createContext} from 'react';

const ProjectsContext = createContext({});

function Projects() {
  return (
    <>
      <ProjectsModal />
      <ProjectsContext.Provider value={{}} >
        <div className="projects">
          <SectionTitle >
            Projects
          </SectionTitle>
          <div className="card-grid">
            { cardContent.map(({style, title, description, links}) => (
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
}

export default Projects;