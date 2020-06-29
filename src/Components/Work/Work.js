import React from 'react';
import './Work.css';

const work_projects = [
  {
    name: 'Centene HQ',
    pic_image: 'centene.png',
    project_desc: 'Centene HQ',
    project_location: 'Clayton, MO'
  },
  {
    name: 'Denver Art Museum',
    pic_image: 'dam.png',
    project_desc: 'Denver Art Museum',
    project_location: 'Denver, CO'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: 'Westin-DIA.png',
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO'
  },
  {
    name: 'Wolfpoint East',
    pic_image: 'wolfpoint_east.png',
    project_desc: 'Wolfpoint East',
    project_location: 'Chicago, IL'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: 'Westin-DIA.png',
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO'
  },
  {
    name: 'DIA - Westin Hotel',
    pic_image: 'Westin-DIA.png',
    project_desc: 'Westin DIA',
    project_location: 'Denver, CO'
  },
]



export function Work(props) {

  const display_projects = work_projects.map(project => {
    return(
      <section className='work_card'>
        <h3>{project.name}</h3>
        <img src={'../../Assets/Images/Work/' + project.pic_image} / >
      </section>
    )
  })


  return(
    <article id='work' className='site_article'>
      {display_projects}
    </article>
  )
}
