import React from 'react';
import './App.css';

// IMPORT CHILD COMPONENTS
import { Splash } from './Components/Splash/Splash.js';
import { About } from './Components/About/About.js';
import { Experience } from './Components/Experience/Experience.js';
import { Portfolio } from './Components/Portfolio/Portfolio.js';
import { Skills } from './Components/Skills/Skills.js';
import { Work } from './Components/Work/Work.js';
import { Footer } from './Components/Footer/Footer.js';


class App extends React.Component {

  constructor(props) {
    super(props);


    this.handleHomeClick = this.handleHomeClick.bind(this)
  }

  handleHomeClick() {

    const elMenu = document.getElementById('site_nav');

    elMenu.style.display = 'block';

  }

  render() {

    return (
      <div className="App">
        <Splash
          handleClick = {() => this.handleHomeClick}
        />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
