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
    project_desc: 'Centene HQ',
    project_location: 'Clayton, MO'
  },
  {
    name: 'Denver Art Museum',
    pic_image: dam,
    project_desc: 'Denver Art Museum',
    project_location: 'Denver, CO'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: dia,
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO'
  },
  {
    name: 'Wolfpoint East',
    pic_image: wolfpoint,
    project_desc: 'Wolfpoint East',
    project_location: 'Chicago, IL'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: dia,
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: dia,
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO'
  },
]

export function Work(props) {

  const display_projects = work_projects.map(project => {

    let portfolio_styles = {
      backgroundImage: `url(${project.pic_image})`
    }

    return(
      <section className='work_card' style={portfolio_styles}>
        <a href='#' target='_blank'>
          <h3>{project.name}</h3>
          <h4>{project.project_desc}</h4>
          <h4>{project.project_location}</h4>
        </a>
      </section>
    )
  })

  return(
    <article id='work' className='site_article'>
      <h2>What I've built</h2>
      {display_projects}
    </article>
  )
}
