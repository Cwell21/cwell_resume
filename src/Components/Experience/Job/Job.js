import React from 'react';
import './Job.css';

//JOB INFORMATION
const workExperience = [
  {
    name: 'Preconstruction Estimator',
    years: 18,
    companies: 'Harmon, Inc / Trainor Glass / Engineered Glass Systems / Gateway Window',
    locations: 'Denver, CO / Saint Louis, MO',
    description: [
      'Developed labor, equipment, material estimates for commercial glass and glazing projects(contract values - $50,000 - $100,000,000)',
      'Work with Architects, General Contractors, and Material vendors to design efficient cost effective design solutions for commercial construction projects'
    ]
  },
  {
    name: 'Project Manager',
    years: 7,
    companies: 'Engineered Glass Systems / Gateway Window',
    locations: 'Saint Louis, MO',
    description: [
      'Developed labor, equipment, material estimates for commercial glass and glazing projects(contract values - $50,000 - $100,000,000)',
      'Work with Architects, General Contractors, and Material vendors to design efficient cost effective design solutions for commercial construction projects'
    ]
  }
];

const display_experience = workExperience.map(job => {
  return(
    <article className='experience_article'>
      <h2>{job.name}</h2>
      <h2>{job.companies}</h2>
      <h2>{job.locations}</h2>
      <ul className='job_description'>
        {job.description.map(job_item => <li className='description_item'>{job_item}</li>)}
      </ul>
    </article>
  )
})

export function Job(props) {

  return(
    <article className='article_job'>
      {display_experience}
    </article>
  )
}
