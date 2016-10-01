import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home.js.jsx'
import SimpleMap from './helpers/SimpleMap.js.jsx'
const UserLocator = require('./helpers/userLocator.js')
const FoursquareHelper = require('./helpers/foursquareHelper')

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {
      homeMounted: true,
      setCoordinates: false
    }
  }

  componentDidMount() {
    UserLocator.getLocation(
      this.setCoordinates,
      UserLocator.showError
    )
  }

  setCoordinates = (position) => {
    this.props.dispatch({
      type: 'SET_COORDINATES',
      data: {lat: position.coords.latitude, lng: position.coords.longitude}
    })
    this.setState({ setCoordinates: true })
    FoursquareHelper.getVenues(this.props.userLocation)
  }

  dismountHome = () => {
    this.setState({ homeMounted: false })
  }

  render() {
    const display = this.state.homeMounted ? <Home dismountHome={ this.dismountHome } canProceed={ this.state.setCoordinates }/>
                                           : <SimpleMap coordinates={ this.props.userLocation }/>
    return (
      <div>
        { display }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userLocation: state.userLocation }
}

export default connect(mapStateToProps)(HomeContainer);
