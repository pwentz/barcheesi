import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home.js.jsx'
const UserLocator = require('./helpers/userLocator')
const FoursquareHelper = require('./helpers/foursquareHelper')

class HomeContainer extends Component {
  componentDidMount() {
    UserLocator.getCoordinates(
      this.setCoordinates,
      UserLocator.showError
    )
  }

  setCoordinates = (position) => {
    this.props.dispatch({
      type: 'SET_COORDINATES',
      data: {lat: position.coords.latitude, lng: position.coords.longitude}
    })
    this.getVenues()
  }

  getVenues = () => {
    FoursquareHelper.getVenues(this.props.userLocation)
      .then(response => {
        let venues = response.data.response.groups[0].items.map(v => v.venue)
        this.setVenues(venues)
      })
      .catch(error => {
        console.log(error)
      })
  }

  setVenues = (rawVenues) => {
    this.props.dispatch({
      type: 'SET_VENUES',
      data: rawVenues
    })
  }

  render() {
    return (
      <div>
        <Home canProceed={ this.props.userLocation }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userLocation: state.reducer.userLocation }
}

export default connect(mapStateToProps)(HomeContainer);
