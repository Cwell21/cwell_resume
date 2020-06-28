import React from 'react';
import './Navigation.css';

export function Navigation(props) {

  const menu_items = [
    "HOME",
    "ABOUT",
    "EXPERIENCE",
    "SKILLS",
    "PORTFOLIO",
    "WORK"
  ]

  let display_links = menu_items.map(link => {
    return(
      <li className='menu_item'>
        <a className='menu_link' href={'#' + link.toLowerCase()}>
          {link}
        </a>
      </li>
    )
  })

  return(
    <nav id='site_nav'>
      <ul className='nav_menu'>
        {display_links}
      </ul>
    </nav>
  );
};
