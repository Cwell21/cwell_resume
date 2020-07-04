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
          <i class="fas fa-user-tie fa-5x"></i>
        </figure>
        <article className='about_info' id='about_stats'>
          <h2>STATS</h2>
          <p>
            <h4>NAME:<span> Matt Caldwell</span></h4><br />

            <h4>Email:<span> <a href='mailto:mcaldwell@cwell21.com'>mcaldwell@cwell21.com</a></span></h4><br />

          </p>
        </article>
      </section>
    </article>
  );
};
