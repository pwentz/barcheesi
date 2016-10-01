import React, { Component } from 'react';
import Venue from './Venue.js.jsx'
import './GMap.css'
require('./../env.js')

import GoogleMap from 'google-map-react';
import {K_SIZE} from './venueStyles.js'

export default class SimpleMapPage extends Component {
  render() {
    const venues = this.props.venues.map(v => {
      return (
        <Venue
          key={ v.id }
          lat={ v.location.lat }
          lng={ v.location.lng }
        />
      )
    })

    return (
      <div className='g-map'>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.google_maps_key
          }}
          defaultCenter={this.props.coordinates}
          defaultZoom={parseInt(16)}
          hoverDistance={K_SIZE / 2}
        >
          { venues }
        </GoogleMap>
      </div>
      );
  }
}
