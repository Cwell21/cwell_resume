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

    // GET NAVIGATION ELEMENTS TO CHANGE ON SCROLL
    const elMenu = document.getElementById('site_nav');
    let elSiteLinks = document.getElementsByClassName('menu_item');

    // GET VIEPORT HEIGHT AND SCROLL POSITION
    const viewportHeight = window.innerHeight;
    let scrollPos = window.scrollY;

    // NAVIGATION COLORS
    const defaultBackground = 'rgb(42,0,126)';
    const selectBackground = 'rgb(235,235,235)';

    let clearBackground = () => {
      console.log(elSiteLinks)
      Array.prototype.forEach.call(elSiteLinks, link => {
        link.style.backgroundColor = defaultBackground;
      })
    }

    if(scrollPos >= 0 && scrollPos < viewportHeight * .75) {
      // SPLASH SECTION
      clearBackground();
      elMenu.style.display = 'none';
    }else if(scrollPos >= viewportHeight * .75 && scrollPos < viewportHeight * 1.75) {
        // ABOUT SECTION
        elMenu.style.display = 'block';
        clearBackground();
        elSiteLinks[1].style.backgroundColor = selectBackground;
    } else if(scrollPos >= viewportHeight * 1.75 && scrollPos < viewportHeight * 2.75) {
        //EXPERIENCE SECTION
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[2].style.backgroundColor = selectBackground;
    } else if(scrollPos >= viewportHeight * 2.75 && scrollPos < viewportHeight * 3.25) {
        // SKILLS SECTION
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[3].style.backgroundColor = selectBackground;
    } else if(scrollPos >= viewportHeight * 3.25 && scrollPos < viewportHeight * 3.75) {
        // PORTFOLIO SECTION
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[4].style.backgroundColor = selectBackground;
    } else if(scrollPos >= viewportHeight * 3.75 && scrollPos < viewportHeight * 4.25) {
        // WORK SECTION
        clearBackground();
        elMenu.style.display = 'block';
        elSiteLinks[5].style.backgroundColor = selectBackground;
    } else {
        // CLEAR OUT
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
