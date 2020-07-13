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
    project_desc: 'JS based adventure game',
    project_type: 'School Project',
    code_link: '#',
    site_link: '#'
  },
  {
    name: 'FESC',
    pic_image: fesc,
    project_desc: 'Florida Energy Consortium Redesign',
    project_type: 'School Project',
    code_link: '#',
    site_link: '#'
  },
  {
    name: 'Imos Pizza',
    pic_image: imos,
    project_desc: 'Copy of existing site using imospizza.com as template (site not affiliated with Imos)',
    project_type: 'Personal Learning Project',
    code_link: '#',
    site_link: '#'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: romocon,
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project',
    code_link: '#',
    site_link: '#'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: romocon,
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project',
    code_link: '#',
    site_link: '#'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: romocon,
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project',
    code_link: '#',
    site_link: '#'
  },
]

export function Portfolio(props) {

  const display_projects = portfolio_projects.map(project => {

    const sectionStyles = {
      backgroundImage: `url(${project.pic_image})`,
      backgroundSize: 'cover'
    }

    return(
      <section className='portfolio_card' style={sectionStyles}>
        <a href={project.site_link} target='_blank'></a>
        <ul className='portfolio_card_information'>
          <li>{project.name}</li>
          <li>{project.project_desc}</li>
          <li>{project.project_type}</li>
          <li><a href={project.code_link}>View Code</a></li>
          <li><a href={project.site_link}>View Site</a></li>
        </ul>
      </section>
    )
  })

  return(
    <article id='portfolio' className='site_article'>
      <h2>What I've coded</h2>
      <section className='slides'>
        {display_projects}
      </section>
    </article>
  )
}
