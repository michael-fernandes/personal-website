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
      color: '#00E08E', 
      background: img.background3,
    },
    title: 'Population Health Work', 
    description: 'Population Health refers to the analysis of health outcomes on a population level. Here are a few public facing tools and data journalism that I have contributed too.',
    links: [
      {url: "https://vizhub.healthdata.org/child-mortality", text: "Child Mortality"},
      {url: "https://covid19.healthdata.org/united-states-of-america", text: "Child Mortality"}
    ]
  }, 
  { 
    style: {
      color: '#FF007D', 
      background: img.background4,
    },     
    title: 'Data Viz Explorations', 
    description: 'Explorations and proof of concepts for novel interactive data visualization using D3.js.',
    links: [
      {url: "https://github.com/michael-fernandes", text: "Code"}
    ]
  }, 
];