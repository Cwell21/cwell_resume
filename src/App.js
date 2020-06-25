import React from 'react';
import './App.css';

// IMPORT CHILD COMPONENTS
import { Splash } from './Components/Splash/Splash.js';


class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="App">
        <Splash />
      </div>
    );
  }
}

export default App;
