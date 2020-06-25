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
        <a className='menu_link' href={link}>
          {link}
        </a>
      </li>
    )
  })

  return(

    <nav className='site_nav'>
      <a href='#' className='item_button'>
        top
      </a>
      <ul nav_menu>
        {display_links}
      </ul>
    </nav>

  );
};
