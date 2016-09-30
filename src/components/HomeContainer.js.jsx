import React, { Component } from 'react';
import Home from './Home.js.jsx'
import SimpleMap from './helpers/SimpleMap.js.jsx'
import UserLocator from './helpers/userLocator.js'
const ul = new UserLocator()

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {
      homeMounted: true
    }
  }

  dismountHome = () => {
    ul.getLocation()
    this.setState({ homeMounted: false })
  }

  render() {
    const display = this.state.homeMounted ? <Home dismountHome={ this.dismountHome } />
                                           : <SimpleMap />
    return (
      <div>
        { display }
      </div>
    )
  }
}

export default HomeContainer;
