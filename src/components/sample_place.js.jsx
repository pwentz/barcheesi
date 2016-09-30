import React, { PropTypes, Component } from 'react';
import { samplePlaceStyle } from './sample_place_styles.js'

class SamplePlace extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {}

  render() {
    return (
      <div style={samplePlaceStyle}>
        {this.props.text}
      </div>
    )
  }
}
export default SamplePlace;
