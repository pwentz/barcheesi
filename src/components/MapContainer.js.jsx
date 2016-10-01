import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleMap from './helpers/SimpleMap.js.jsx'
const UserLocator = require('./helpers/userLocator.js')
const FoursquareHelper = require('./helpers/foursquareHelper')

class MapContainer extends Component {
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
    console.log(this.props.venues)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userLocation: state.userLocation,
           venues: state.venues }
}
export default connect(mapStateToProps)(MapContainer)
