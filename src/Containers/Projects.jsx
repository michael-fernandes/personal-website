import React from 'react';
import { Card, CardDescription, CardTitle, SectionTitle } from '../Components/ui';

import cardContent from '../static/cardContent';
import '../Styles/Projects.css';
import '../Styles/Card.css';

function Projects() {
  return (
    <div className="projects">
      <SectionTitle 
        subtitle="A collection of web apps including code and prototypes I've worked on.">
        Projects
      </SectionTitle>
      <div className="card-grid">
        { cardContent.map(({style, title, description, links}) => (
          <Card theme={style} links={links}>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;