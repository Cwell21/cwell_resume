import React from 'react';
import './Skills.css';

//SCHOOL INFORMATION
const workExperience = [
  {
    name: 'Missouri State University',
    degree: 'B.S. Marketing / Advertising',
    location: 'Springfield, MO'
  },
  {
    name: 'University of Washington PCE',
    degree: 'Certificate - HTML 5, CSS 3, Javascript for Responsive Web Design',
    location: 'Online'
  },
  {
    name: 'Red Rocks Community College',
    degree: 'Certificate - Revit Architecture',
    location: 'Golden, CO'
  },
];

const techSkills = [
  'HTML5',
  'CSS3',
  'Javascript',
  'React JS',
  'PHP',
];

let displaySchool = workExperience.map(school => {
  return(
    <ul className='school'>
      <li>
        {school.name}
      </li>
      <li>
        {school.degree}
      </li>
    </ul>
  )
});

let displaySkills = techSkills.map(skill => {
  return(
    <ul className='skills'>
      <li>
        {skill}
      </li>
    </ul>
  )
})

export function Skills(props) {

  return(
    <article id='skills' className='site_article'>
      <h1>Where and what I've learned.</h1>
      <section className='skills_row'>
        <section className='education'>
          {displaySchool}
        </section>
        <section className='tech_skills'>
          {displaySkills}
        </section>
      </section>
    </article>
  )
}
