import * as img from '../static/backgrounds';

export default [
  { 
    style: {
      color: '#FFA600', 
      background: img.background1,
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
      background: img.background3,
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
      background: img.background2,
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
      background: img.background4,
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
      background: img.background5,
    },     
    title: 'Opioid Crisis', 
    description: 'A custom build visualization dashboard for showing opioid deaths in America.',
    links: [
      {url: "https://github.com/michael-fernandes/Opioid-Crisis", text: "Code"}
    ]
  }, 
];