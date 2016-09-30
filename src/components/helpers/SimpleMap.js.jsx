import React, { Component } from 'react';
import './GMap.css'
require('./../../env.js')

import GoogleMap from 'google-map-react';
import SamplePlace from './../sample_place.js.jsx';

export default class SimpleMapPage extends Component {
  static defaultProps = {
    zoom: 12,
  };

  render() {
    return (
      <div className='g-map'>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.google_maps_key
          }}
          defaultCenter={this.props.coordinates}
          defaultZoom={this.props.zoom}>
        </GoogleMap>
      </div>
      );
  }
}
