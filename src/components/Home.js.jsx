import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='home-background'></div>
        <div className='filler'></div>
        <h1>Cheap friends and cheaper well drinks..</h1>
        <div className='filler'></div>


        <Button
          bsStyle={ 'danger' }
        >
          Get Started!
        </Button>
      </div>
    )
  }
}
export default Home;
