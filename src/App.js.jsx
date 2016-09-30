import React, { Component } from 'react';
import NavbarContainer from './components/NavbarContainer.js.jsx';
import HomeContainer from './components/HomeContainer.js.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <HomeContainer />
      </div>
    );
  }
}

export default App;
