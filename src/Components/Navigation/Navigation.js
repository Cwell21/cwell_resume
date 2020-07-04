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

  window.onscroll = () => {
    const elMenu = document.getElementById('site_nav');
    let elSiteLinks = document.getElementsByClassName('menu_item');

    const viewportHeight = window.innerHeight;
    let scrollPos = window.scrollY;

    console.log(viewportHeight)
    console.log(scrollPos)

    let clearBackground = () => {
      console.log(elSiteLinks)
      Array.prototype.forEach.call(elSiteLinks, link => {
        link.style.backgroundColor = 'rgb(10,10,30)';
      })
    }

    if(scrollPos >= 0 && scrollPos < viewportHeight * .75) {
      clearBackground();
      elMenu.style.display = 'none';
    }else if(scrollPos >= viewportHeight && scrollPos < viewportHeight * 2) {
        elMenu.style.display = 'block';
        clearBackground();
        elSiteLinks[1].style.backgroundColor = 'rgb(150,20,20)';
    } else if(scrollPos >= viewportHeight * 2 && scrollPos < viewportHeight * 2.75) {
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[2].style.backgroundColor = 'rgb(150,20,20)';
    } else if(scrollPos >= viewportHeight * 2.75 && scrollPos < viewportHeight * 3.75) {
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[3].style.backgroundColor = 'rgb(150,20,20)';
    } else if(scrollPos >= viewportHeight * 3.75 && scrollPos < viewportHeight * 4.75) {
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[4].style.backgroundColor = 'rgb(150,20,20)';
    } else if(scrollPos >= viewportHeight * 4.75 && scrollPos < viewportHeight * 5.75) {
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[5].style.backgroundColor = 'rgb(150,20,20)';
    } else {
        clearBackground();

    }
  }


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
