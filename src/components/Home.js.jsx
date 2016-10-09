import React, { Component } from 'react';
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    const button = this.props.canProceed ? <Link to='/venues'><Button bsStyle={ 'info' }>Get Started!</Button></Link>
                                         : <Button bsStyle={ 'danger' } disabled>Get Started!</Button>
    return (
      <div className='Home'>
        <div className='home-background'></div>
        <div className='filler'></div>
        <h1>Find your nearest happy hour...on foot.</h1>
        <div className='filler'></div>

        { button }
      </div>
    )
  }
}
export default Home;
