import React from 'react';
import './Splash.css';

// IMPORT ASSETS

//IMPORT CHILD COMPONENTS
import { Navigation } from '../Navigation/Navigation.js';
import { Homebutton } from '../Homebutton/Homebutton.js';

export function Splash(props) {


  return(
    <article id='home' className='splash'>
      <div className='splash_cover'></div>
      <section className='splash_text_container'>
        <h1>Matt Caldwell</h1>
        <span>Front End | Developer</span>
        <Homebutton />
        <Navigation />
      </section>
    </article>
  );
};
