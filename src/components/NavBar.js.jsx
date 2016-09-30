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
          <Nav
            pullRight
          >
            <NavItem eventKey={1} href="#">
              <i className='fi-social-facebook'></i>  Login
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
