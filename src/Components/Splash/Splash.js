import React from 'react';
import './Splash.css';

// IMPORT ASSETS

//IMPORT CHILD COMPONENTS
import { Navigation } from '../Navigation/Navigation.js';

export function Splash(props) {


  return(
    <section className='splash'>
      <div className='splash_cover'></div>
      <section className='splash_text_container'>
        <h1>Matt Caldwell</h1>
        <span>Front End | Developer</span>
        <Navigation
          clickHandler = {props.clickHandler}
        />
      </section>
    </section>
  );
};
