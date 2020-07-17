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

  componentDidMount() {
    window.onscroll = () => {

      // GET NAVIGATION ELEMENTS TO CHANGE ON SCROLL
      const elMenu = document.getElementById('site_nav');
      let elSiteLinks = document.getElementsByClassName('menu_item');

      // GET FOOTER ELEMENTS
      const elFooter = document.getElementById('site_footer');

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

      // CODE TO MODIFY FOOTER ON SCROLL

      if(scrollPos > viewportHeight * .25) {
        elFooter.style.top = '95vh';
      } else {
        elFooter.style.top = 0;
      }



      // CODE TO MODIFY NAVIGATION ON SCROLL
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
