import React from 'react';
import './About.css';

export function About(props) {

  return(
    <article id='about' className='site_article'>
      <header className='about_header'>
        <h1>About Me</h1>
        <h4>I'm a budding front end developer</h4>
      </header>
      <section className='about_section'>
        <article className='about_info' id='about_description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam ac magna ultrices, viverra nulla nec, ultricies ante.
            Integer non libero congue, malesuada justo et, commodo velit.
            Mauris in sapien tristique, elementum sem et, pretium dolor.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
        </article>
        <figure className='about_info' id='about_figure'>
          <img src='' alt='Profile Picture' />
        </figure>
        <article className='about_info' id='about_stats'>
          <h2>Stats</h2>
          <p>
            <h4>NAME:</h4><br />
            <span>Matt Caldwell</span><br />
            <h4>Email</h4><br />
            <a href='mailto:mcaldwell@cwell21.com'>mcaldwell@cwell21.com</a>
          </p>
        </article>
      </section>
    </article>
  );
};
