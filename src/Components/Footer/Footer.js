import React from 'react';
import './Footer.css';


export function Footer(props) {

  return(
    <footer className='site_footer'>
      <ul>
        <li>
          <a href='#' target='_blank'>
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <span className='contact_phone'>314.330.8213</span>
          <i class="fas fa-phone-square fa-2x"></i>
        </li>
        <li>
          <a href='mailto:mcaldwell21@cwell21.com'>
            <i class="fas fa-envelope fa-2x"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
