import React from 'react';
import './Work.css';

// IMPORT ASSETS
import centene from '../../Assets/Images/Work/centene.jpg';
import dam from '../../Assets/Images/Work/dam.jpg';
import dia from '../../Assets/Images/Work/dia.jpeg';
import wolfpoint from '../../Assets/Images/Work/wolfpoint_east.jpg';

const work_projects = [
  {
    name: 'Centene HQ',
    pic_image: centene,
    project_desc: 'New headquarters addition for Centenne Corporation',
    project_location: 'Clayton, MO',
    project_link: 'localhost:80//cms/index.php',
    project_role: 'Estimator',
    project_value: '~$25,000,000'
  },
  {
    name: 'Denver Art Museum',
    pic_image: dam,
    project_desc: 'Denver Art Museum',
    project_location: 'Denver, CO',
    project_link: 'localhost://cms/index.php',
    project_role: 'Estimator',
    project_value: '~$8,000,000'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: dia,
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO',
    project_link: 'localhost://cms/index.php',
    project_role: 'Estimator',
    project_value: '~$25,000,000'
  },
  {
    name: 'Wolfpoint East',
    pic_image: wolfpoint,
    project_desc: 'Wolfpoint East',
    project_location: 'Chicago, IL',
    project_link: 'localhost://cms/index.php',
    project_role: 'Estimator',
    project_value: '~$45,000,000'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: dia,
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO',
    project_link: 'localhost://cms/index.php',
    project_role: 'Estimator',
    project_value: '~$25,000,000'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: dia,
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO',
    project_link: 'localhost://cms/index.php',
    project_role: 'Estimator',
    project_value: '~$25,000,000'
  },
]

export function Work(props) {

  const display_projects = work_projects.map(project => {

    let portfolio_styles = {
      backgroundImage: `url(${project.pic_image})`,
      backgroundSize: 'cover',
  }

    return(
      <section className='work_card' style={portfolio_styles}>
        <a href={project.project_link} target='_blank'></a>
        <ul className='work_card_information'>
          <li>Project - {project.name}</li>
          <li>{project.project_desc}</li>
          <li>Location: {project.project_location}</li>
          <li>Role: {project.project_role}</li>
          <li>Value: {project.project_value}</li>
        </ul>
      </section>
    )
  })

  return(
    <article id='work' className='site_article'>
      <h2>What I've built</h2>
      <section className='slides'>
        {display_projects}
      </section>
    </article>
  )
}
