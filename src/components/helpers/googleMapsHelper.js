import axios from 'axios'
require('./../../env.js')

class GoogleMapsHelper {
  initAPI() {
    return axios.get(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.google_maps_key}&callback=initMap`
    )

    function initMap() {
      debugger
    }

  }
}

module.exports = new GoogleMapsHelper()
