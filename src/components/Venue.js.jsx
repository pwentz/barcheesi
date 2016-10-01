import React, { PropTypes, Component } from 'react'
import {venueStyles, venueStylesHover} from './venueStyles.js'

class Venue extends Component {
  static propTypes = {
    $hover: PropTypes.bool
  }

  static defaultProps = {}

  render() {
    const styles = this.props.$hover ? venueStylesHover : venueStyles
    return (
      <div style={styles}>
        <i className='fi-star'></i>
      </div>
    )
  }
}

export default Venue;
