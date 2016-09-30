import React, {PropTypes, Component} from 'react';
import './GMap.css'
require('./../../env.js')

import GoogleMap from 'google-map-react';
import SamplePlace from './../sample_place.js.jsx';

export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='g-map'>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.google_api_key
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <SamplePlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
          <SamplePlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
        </GoogleMap>
      </div>
      );
  }
}
