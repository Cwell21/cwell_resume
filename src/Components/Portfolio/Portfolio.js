import React from 'react';
import './Portfolio.css';

const portfolio_projects = [
  {
    name: 'Hero Adventure',
    pic_image: 'adventure.png',
    project_desc: 'Hero Adventure',
    project_type: 'School Project'
  },
  {
    name: 'FESC',
    pic_image: 'fesc.png',
    project_desc: 'Redesign for Florida Energy Consortium',
    project_type: 'School Project'
  },
  {
    name: 'Imos Pizza',
    pic_image: 'imos.png',
    project_desc: 'Imos pizza copy',
    project_type: 'Personal Learning Project'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: 'romocon.png',
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: 'romocon.png',
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project'
  },
  {
    name: 'Rocky Mountain Conservancy',
    pic_image: 'romocon.png',
    project_desc: 'Rocky Mountain Conservancy',
    project_type: 'Personal Learning Project'
  },
]

export function Portfolio(props) {

  const display_projects = portfolio_projects.map(project => {
    return(
      <section className='portfolio_card'>
        <h3>{project.name}</h3>
        <img src={'../../Assets/Images/Portfolio/' + project.pic_image} / >
      </section>
    )
  })

  return(
    <article id='portfolio' className='site_article'>
      {display_projects}
    </article>
  )
}
