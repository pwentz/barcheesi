import React, { Component } from 'react';
import './GMap.css'
require('./../env.js')

import GoogleMap from 'google-map-react';

export default class SimpleMapPage extends Component {
  render() {
    return (
      <div className='g-map'>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.google_maps_key
          }}
          defaultCenter={this.props.coordinates}
          defaultZoom={parseInt(14)}>
        </GoogleMap>
      </div>
      );
  }
}
