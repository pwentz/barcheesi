import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleMap from './SimpleMap.js.jsx'

class MapContainer extends Component {
  render() {
    return (
      <div>
        <SimpleMap
          coordinates={ this.props.userLocation }
          venues={ this.props.venues }
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userLocation: state.userLocation,
           venues: state.venues }
}
export default connect(mapStateToProps)(MapContainer)
