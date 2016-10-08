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
  var id = window.location.pathname.split('/').slice(-1)[0]
  var venue = state.reducer.venues.find(v => v.id === id)
  return { venue: venue }
}

export default connect(mapStateToProps)(VenueDataContainer)
