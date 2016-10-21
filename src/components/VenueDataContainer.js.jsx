import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import './VenueData.css'

class VenueDataContainer extends Component {
  get randomKey() {
    return new Date().valueOf() + Math.random()
  }

  get popularTimes() {
    return this.props.venue.popular.timeframes
  }

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

  bannerPhoto = () => {
    return this.props.venue.photos.groups[0].items.sort(this.widestPhoto)[0]
  }

  widestPhoto = (previousPhoto, currentPhoto) => {
    return currentPhoto.width - previousPhoto.width
  }

  parseIcon = (icon) => {
    return icon.prefix + 45 + icon.name
  }

  getJustifications = () => {
    return this.props.venue.justifications.map(justification => {
      return { text: justification.text, icon: this.parseIcon(justification.icon) }
    })
  }

  formattedJustifications = () => {
    return this.getJustifications().map(j => {
      return <Row
              key={this.randomKey}
             >
               <img src={j.icon}></img>
               { j.text }
            </Row>
    })
  }

  formattedPopular = () => {
    return this.popularTimes.map(timeframe => {
      return  <div
               key={this.randomKey}
              >
                <p>{ timeframe.days } : { timeframe.open[0].renderedTime }</p>
              </div>
    })
  }

  formattedAttributes = () => {
    return this.props.venue.attributes.groups.map(a => {
      return <div
              key={this.randomKey}
             >
              <ul>
                <li className='venue-attrs'>{ a.items[0].displayName }: { a.items[0].displayValue }</li>
              </ul>
             </div>
    })
  }


  render() {
    console.log(this.props.venue)
    const photos = this.props.venue.photos
    const photo = this.formattedPhoto()
    const banner = `${this.bannerPhoto().prefix}600x${this.bannerPhoto().width}${this.bannerPhoto().suffix}`
    const name = this.props.venue.name
    const hours = this.findHours()
    const isOpen = this.isOpen()
    const addressCollection = this.props.venue.location.formattedAddress
    const rating = this.props.venue.rating
    const popularTimes = this.props.venue.popular ? this.formattedPopular()
                                                  : null
    const justifications = this.props.venue.justifications ? this.formattedJustifications()
                                                           : null
    const attrs = this.formattedAttributes()
    return (
      <div className='venue-data'>
        <Row>

          <Col md={4}>
            <img src={photo} className='venue-photo'></img>
          </Col>

          <Col md={2}>
            <div className='venue-filler'></div>
            <div className='venue-rating-container'>
              <h5 className='venue-rating'>{ rating }</h5>
            </div>
          </Col>

          <Col md={6}>
            <h4 className='venue-name'>
              { name }
            </h4>
            { justifications }
          </Col>
        </Row>

        <hr></hr>

        <Row>
          <Col md={6}>
            { attrs }
          </Col>

          <Col md={6}>
            <Row className='venue-address'>
              <p>{ addressCollection[0] }</p>
              <p>{ addressCollection[1] }</p>
            </Row>

            <hr></hr>
            <Row className='venue-hours'>
              { popularTimes }
            </Row>

            <Row className='venue-hours'>
              <h3>Hours:</h3>
              <h4>Open Now</h4>
              <p>{ hours }</p>
            </Row>

          </Col>
        </Row>
        <hr></hr>
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
