import React from 'react';
import './About.css';

export function About(props) {

  return(
    <article id='about' className='site_article'>
      <header className='about_header'>
        <h1>About Me</h1>
      </header>
      <address className='about_stats'>
        <ul>
          <li>B.S. Marketing - Missouri State University</li>
          <li>Certificate - HTML5/CSS3 for Responsive Web Design - UW - PCE</li>
          <li>
            <a href='mailto:mcaldwell@cwell21.com'>
              <i class="fas fa-envelope"></i>
                mcaldwell@cwell21.com
            </a>
          </li>
        </ul>
      </address>
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
          <i class="fas fa-user-tie fa-2x"></i>
        </figure>
      </section>
    </article>
  );
}
