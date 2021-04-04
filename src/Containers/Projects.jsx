import React from 'react';
import { Card, CardDescription, CardLinks, CardLink, CardTitle, SectionTitle } from '../Components/ui';
import * as img from '../static/backgrounds';

import cardContent from '../static/cardContent';
import '../Styles/Projects.css';
import '../Styles/Card.css';

function Projects() {
  return (
    <div className="projects">
      <SectionTitle>Projects</SectionTitle>
      { cardContent.map(({style, title, description, links}) => (
        <Card color={style}>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardLinks>
            {links.map(({url, text}) => <CardLink url={url} text={text}/>)}
          </CardLinks>
        </Card>
      ))}
    </div>
  );
}

export default Projects;