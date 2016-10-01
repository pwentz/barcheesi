import React, { Component } from 'react';
import NavbarContainer from './components/NavbarContainer.js.jsx';
import HomeContainer from './components/HomeContainer.js.jsx';
import MapContainer from './components/MapContainer.js.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <HomeContainer />
        <MapContainer />
      </div>
    );
  }
}

export default App;
