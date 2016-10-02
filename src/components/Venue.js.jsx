import React, { PropTypes, Component } from 'react'
import {venueStyles, venueStylesHover} from './venueStyles.js'

class Venue extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hover:
  //   }
  // }


  render() {
    const styles = this.props.$hover ? venueStylesHover : venueStyles
    return (
      <div style={styles}
      >
        <i className='fi-star'></i>
      </div>
    )
  }
}

export default Venue;
