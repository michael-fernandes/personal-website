import * as img from '../static/backgrounds';

const isDev = false;

export default [
  { 
    style: {
      color: '#FFA600', 
      background: isDev ? img.background1 : 'http://mferns.com/backgrounds/background-01.svg',
    },
    title: 'PhysioMap', 
    description: 'A collaboration done with Physical Therapy Researchers to create a patient-centered app For communicating fall-risk to geriatric patients.',
    links: [
      {url: "https://github.com/michael-fernandes/physio-map", text: "Code"},
      {url: "http://staff.washington.edu/mfern93/", text: "Website"}
    ]
  },
  { 
    style: {
      color: '#64E6B6', 
      background: isDev ? img.background3 : 'http://mferns.com/backgrounds/background-03.svg',
    },
    title: 'Population Health Work', 
    description: 'Population Health refers to the analysis of health outcomes on a population level. Here are a few public facing tools and data journalism that I have contributed too.',
    links: [
      {url: "https://vizhub.healthdata.org/child-mortality", text: "Child Mortality"},
      {url: "https://covid19.healthdata.org/united-states-of-america", text: "COVID-19 Projections"}
    ]
  }, 
  { 
    style: {
      color: '#30AFF2', 
      background: isDev ? img.background2 : 'http://mferns.com/backgrounds/background-02.svg',
    },     
    title: 'Data Viz Explorations', 
    description: 'Explorations and proof of concepts for novel interactive data visualization using D3.js.',
    links: [
      {url: "https://observablehq.com/@michael-fernandes", text: "Observable Demos"}
    ]
  }, 
  { 
    style: {
      color: '#F46464', 
      background: isDev ? img.background4 : 'http://mferns.com/backgrounds/background-04.svg',
    },     
    title: 'Bookasorous', 
    description: 'A mobile app built in react native which allows book readers to track new vocabulary words. Work in Progress.',
    links: [
      {url: "https://github.com/michael-fernandes", text: "Code"}
    ]
  }, 
  { 
    style: {
      color: '#6F64F4', 
      background: isDev ? img.background5 : 'http://mferns.com/backgrounds/background-05.svg',
    },     
    title: 'Opioid Crisis', 
    description: 'A custom build visualization dashboard for showing opioid deaths in America.',
    links: [
      {url: "https://github.com/michael-fernandes/Opioid-Crisis", text: "Code"}
    ]
  }, 
];