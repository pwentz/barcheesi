import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Barcheesi</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
