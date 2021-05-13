import mockupsOnClick from './mockupsOnClick';

export default [
  { 
    style: {
      color: '#FFA600', 
      background: 'https://s3-us-west-2.amazonaws.com/mferns.com/thumb1.png',
    },
    title: 'PhysioMap', 
    description: 'A collaboration done with Physical Therapy Researchers to create a patient-centered app communicating fall-risk to geriatric patients.',
    links: [
      {url: "http://staff.washington.edu/mfern93/", text: "PhysioMap"},
      {url: "https://github.com/michael-fernandes/physio-map", text: "View Code"},
    ]
  },
  { 
    style: {
      color: '#64E6B6', 
      background: 'https://s3-us-west-2.amazonaws.com/mferns.com/thumb2.png',
    },
    title: 'Population Health Work', 
    description: 'Population Health refers to the analysis of health outcomes on a population level. Here are a few public facing tools and data journalism pieces that I have contributed too.',
    links: [
      {url: "https://vizhub.healthdata.org/child-mortality", text: "Child Mortality"},
      {url: "https://covid19.healthdata.org/united-states-of-america", text: "COVID-19 Projections"},
      // {url: "http://michael-fernandes.github.io/Opioid-Crisis", text: "Opioid Crisis"}
    ]
  }, 
  { 
    style: {
      color: '#30AFF2', 
      background: 'https://s3-us-west-2.amazonaws.com/mferns.com/thumb3.png',
    },     
    title: 'Data Viz Explorations', 
    description: 'Explorations and proof of concepts for interactive data visualizations using D3.js.',
    links: [
      {url: "https://observablehq.com/@michael-fernandes", text: "Observable"}
    ]
  }, 
  { 
    style: {
      color: '#F46464', 
      background: 'https://s3-us-west-2.amazonaws.com/mferns.com/thumb4.png',
    },     
    title: 'Bookasorous', 
    description: 'A mobile app built in react native which allows book readers to track new vocabulary words. Work in Progress.',
    links: [
      {url: "https://github.com/michael-fernandes/Bookasorous", text: "View Code"}
    ]
  }, 
  { 
    style: {
      color: '#6F64F4', 
      background: 'https://s3-us-west-2.amazonaws.com/mferns.com/thumb5.png',
    },     
    title: 'Self Assist Mockups', 
    description: "A mockup suggesting an application that gives users feedback on their device usage, helps them self-diagnosis problems with the device and seek help via their provider or device manufacturer.",
    links: [
      {onClick: mockupsOnClick, text: "View Mockups"}
    ]
  },
];