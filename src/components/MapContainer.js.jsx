import React, { Component } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet'
import { Col, Row } from 'react-bootstrap'
import { push } from 'react-router-redux'
import './GMap.css'
const FoursquareHelper = require('./helpers/foursquareHelper')

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
      const myIcon = L.icon({
        iconSize: [50,50],
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/location-map-simplicity/512/pub_beer-256.png',
      })
      const marker = L.marker([v.location.lat, v.location.lng], {icon: myIcon}).addTo(myMap)
      marker.bindPopup(v.name)
      marker.on('click', this.handleVenueClick.bind(null, v, myMap, marker))
      marker.on('mouseover', this.handleVenueHover.bind(marker))
    })
  }

  handleVenueClick = (v, map, marker) => {
    const params = v.name.toLowerCase().split(' ').join('-')
    const path = `/venues/${params}`
    this.props.dispatch(push(path))
    map.panTo([v.location.lat, v.location.lng], {
      animate: true
    })
    marker.openPopup()
  }

  getVenueData = (venue, map, marker) => {
  }

  handleVenueHover(v, map) {
    this.openPopup()
  }

  render() {
    return(
      <div>
        <Row>
          <Col md={7}>
            { this.props.children }
          </Col>
          <Col md={5}>
            <div id='g-map'>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { userLocation: state.reducer.userLocation,
           venues: state.reducer.venues }
}
export default connect(mapStateToProps)(MapContainer)
