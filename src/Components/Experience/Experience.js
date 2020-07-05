import React from 'react';
import './Experience.css';

import {Job} from './Job/Job.js';

export function Experience(props) {

  return(
    <article id='experience' className='site_article'>
      <header>
        <h1>My Experience</h1>
      </header>
      <section className='experience_section'>
        <Job />
      </section>
    </article>
  )
}
