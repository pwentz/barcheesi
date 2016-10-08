import React, { Component } from 'react'
import { connect } from 'react-redux'

class VenueDataContainer extends Component {
  render() {
    const name = this.props.venue.name
    const hours = this.props.venue.hours.status
    return (
      <div>
        <ul>
          <li>{ name }</li>
          <li>{ hours }</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const venue = state.reducer.venues.find(v => {
    return v.id === state.reducer.mountedVenue
  })
  return { venue: venue }
}

export default connect(mapStateToProps)(VenueDataContainer)
