import React, { Component } from 'react';
import SimpleMap from './SimpleMap.js.jsx'
import { connect } from 'react-redux';
import L from 'leaflet'

class MapContainer extends Component {
  componentDidMount() {
    const lat = this.props.userLocation.lat
    const lng = this.props.userLocation.lng
    const myMap = L.map('g-map').setView([lat, lng], 16)
    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=${process.env.mapbox_access_token}`, {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    }).addTo(myMap);
    this.addMarkers(myMap)
  }

  addMarkers(myMap) {
    this.props.venues.forEach( v => {
      const divIcon = L.icon({
        iconSize: [50,50],
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/location-map-simplicity/512/pub_beer-256.png',
      })
      const marker = L.marker([v.location.lat, v.location.lng], {icon: divIcon}).addTo(myMap)
      marker.bindPopup(v.name)
    })
  }

  render() {
    return(
      <div id='g-map'>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userLocation: state.userLocation,
           venues: state.venues }
}
export default connect(mapStateToProps)(MapContainer)
