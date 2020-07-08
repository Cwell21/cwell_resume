import React from 'react';
import './Portfolio.css';

// IMPORT ASSETS
import adventure from '../../Assets/Images/Portfolio/adventure.png';
import fesc from '../../Assets/Images/Portfolio/fesc.png';
import imos from '../../Assets/Images/Portfolio/imos.png';
import romocon from '../../Assets/Images/Portfolio/romocon.png';

const portfolio_projects = [
  {
    name: 'Hero Adventure',
    pic_image: adventure,
    project_desc: 'Hero Adventure',
    project_type: 'School Project'
  },
  {
    name: 'FESC',
    pic_image: fesc,
    project_desc: 'Redesign for Florida Energy Consortium',
    project_type: 'School Project'
  },
  {
    name: 'Imos Pizza',
    pic_image: imos,
    project_desc: 'Imos pizza copy',
    project_type: 'Personal Learning Project'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: romocon,
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: romocon,
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: romocon,
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project'
  },
]

export function Portfolio(props) {

  const display_projects = portfolio_projects.map(project => {


    return(
      <section className='portfolio_card'>
        <a href='#' target='_blank'>
          <h3>{project.name}</h3>
          <img src={project.pic_image} />
          <h4>{project.project_desc}</h4>
          <h4>{project.project_type}</h4>
        </a>
      </section>
    )
  })

  return(
    <article id='portfolio' className='site_article'>
      <h2>What I've coded</h2>
      {display_projects}
    </article>
  )
}
