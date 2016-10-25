import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home.js.jsx'
import ProgressArc from './ProgressArc.js.jsx'
const UserLocator = require('./helpers/userLocator')
const FoursquareHelper = require('./helpers/foursquareHelper')

class HomeContainer extends Component {
  componentWillMount() {
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
    rawVenues.forEach(venue => {
      FoursquareHelper.getVenueDetails(venue.id)
        .then(response => {
          this.props.dispatch({
            type: 'ADD_VENUE',
            data: response.data.response.venue
          })
        })
    })
  }

  getArc = (percentComplete) => {
    if (percentComplete < 1) {
        return <ProgressArc
                 height={300}
                 width={300}
                 innerRadius={100}
                 outerRadius={110}
                 id="d3-arc"
                 backgroundColor="#e6e6e6"
                 foregroundColor="#ffc733"
                 percentComplete={percentComplete}
               />
    }
  }

  render() {
    const percentComplete = this.props.venues.length / 7
    const canProceed = () => percentComplete >= 1
    const renderArc = this.getArc(percentComplete)
    return (
      <div>
        <Home canProceed={ canProceed }/>
        { renderArc }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userLocation: state.reducer.userLocation,
           venues: state.reducer.venues }
}

export default connect(mapStateToProps)(HomeContainer);
