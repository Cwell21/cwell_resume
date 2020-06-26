import React from 'react';
import './App.css';

// IMPORT CHILD COMPONENTS
import { Splash } from './Components/Splash/Splash.js';
import { About } from './Components/About/About.js';


class App extends React.Component {

  constructor(props) {
    super(props);


    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {

    console.log('event Handler called');
    console.log(e.target);
    // HIDE ELEMENT
    e.target.style.display = 'none';

  }

  render() {

    return (
      <div className="App">
        <Splash
          clickHandler = {this.handleClick}
        />
        <About />
      </div>
    );
  }
}

export default App;
