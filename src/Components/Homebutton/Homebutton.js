import React from 'react';
import './Homebutton.css';

export function Homebutton(props) {

  // const btnHomeClick = () => {
  //
  //   console.log('Click')
  //   let elSiteNav = document.getElementById('site_nav');
  //
  //   if(elSiteNav.style.display == 'none') {
  //     elSiteNav.style.display = 'block';
  //   } else {
  //     elSiteNav.style.display = 'none';
  //   }
  //}


  return(
    <div className='btn_home'>
    <a href='#about' className='item_button' onClick={props.handleClick()}>
      <i class="fas fa-arrow-down fa-2x"></i>
    </a>
    </div>
  )
}
