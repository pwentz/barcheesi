import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>GeoPub</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
