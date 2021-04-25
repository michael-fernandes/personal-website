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
          <SectionTitle 
            subtitle="A collection of web apps including websites and code I've worked on.">
            Projects
          </SectionTitle>
          <div className="card-grid">
            { cardContent.map(({style, title, description, links}) => (
              <Card theme={style} links={links} key={title}>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </ProjectsContext.Provider>
    </>
  );
}

export default Projects;