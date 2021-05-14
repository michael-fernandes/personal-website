import React, { Suspense, lazy } from 'react';

const Content = () => {
  return(
    <section className='intro'>
      <p>
        Hello, my name is Michael. A front-end Developer with a passion for UX.
      </p>
      <p>
        I have 3+ years of creating web applications, typically using Javascript and React. I care a lot about solving technical problems in human centered ways. 
      </p>
      <p>
        Currently, I work at the Institute for Health Metrics and Evaluation creating Data Visualization tools for health outcome data. 
      </p>
    </section>
  );
}

const Lazy = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: () => <Content /> });
  }, 800);
}));

const Fallback = () => {
  return ( 
    <section className="ssc intro ssc-intro">
      <div className="ssc-wrapper ssc-spacer">
        <div className="ssc-line"></div>
      </div>
      <div className="ssc-wrapper ssc-spacer">
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
      </div>
      <div className="ssc-wrapper ssc-spacer">
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
      </div>
    </section>
  );
}

export default function Intro() {
  return (
    <Suspense fallback={<Fallback />}>
      <Lazy />
    </Suspense>
  );
}