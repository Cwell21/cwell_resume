import React from 'react';
import './Footer.css';


export function Footer(props) {

  return(
    <footer id='site_footer'>
      <ul>
        <li>
          <a href='#' target='_blank'>
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <span className='contact_phone'>
            Phone: 314.330.8213
          </span>
          <i class="fas fa-phone-square"></i>
        </li>
        <li>
          <a href='mailto:mcaldwell21@cwell21.com'>
            <i class="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
