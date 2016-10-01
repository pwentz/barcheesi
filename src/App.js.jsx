import React, { Component } from 'react';
import NavbarContainer from './components/NavbarContainer.js.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        {this.props.children}
      </div>
    );
  }
}

export default App;
