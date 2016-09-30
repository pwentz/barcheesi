import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='home-background'></div>
        <div className='filler'></div>
        <h1>Find your nearest happy hour...on foot.</h1>
        <div className='filler'></div>


        <Button
          bsStyle={ 'danger' }
          onClick={ this.props.dismountHome }
        >
          Get Started!
        </Button>
      </div>
    )
  }
}
export default Home;
