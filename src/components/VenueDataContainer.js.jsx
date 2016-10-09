import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import './VenueData.css'

class VenueDataContainer extends Component {
  formattedPhoto = () => {
    return `${this.props.venue.bestPhoto.prefix}300x300${this.props.venue.bestPhoto.suffix}`
  }

  findHours = () => {
    if (this.props.venue.hours) return this.props.venue.hours.status
    if (this.props.venue.popular) return this.props.venue.popular.status
  }

  isOpen = () => {
    if (this.props.venue.hours) return this.props.venue.hours.isOpen
    if (this.props.venue.popular) return this.props.venue.popular.isOpen
  }

  render() {
    const photo = this.formattedPhoto()
    const name = this.props.venue.name
    const hours = this.findHours()
    const isOpen = this.isOpen()
    const addressCollection = this.props.venue.location.formattedAddress
    const rating = this.props.venue.rating
    const justifications = this.props.venue.justifications
    const attributes = this.props.venue.attributes
    return (
      <div className='venue-data'>
        <Row>
          <h4 className='venue-name'>
            { name }
          </h4>
          <img src={photo}></img>
        </Row>
        <Row className='venue-address'>
          <p>{ addressCollection[0] }</p>
          <p>{ addressCollection[1] }</p>
        </Row>
        <hr></hr>
        <Row className='venue-hours'>
          <h3>Hours:</h3>
          <h4>Open Now</h4>
          <p>{ hours }</p>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const path = window.location.pathname.split('/').slice(-1)[0]
  const venue = state.reducer.venues.find(v => {
    return path.split('-').join(' ') === v.name.toLowerCase()
  })
  return { venue: venue }
}

export default connect(mapStateToProps)(VenueDataContainer)
