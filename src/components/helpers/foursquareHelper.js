require('./../../env')
import axios from 'axios'

class FoursquareHelper {
  getVenues(c) {
    return axios.get(
      `https://api.foursquare.com/v2/venues/explore${this.params(c)}`
    )
  }

  params(c) {
    return `${this.coords(c)}${this.foursquareParams()}${this.otherParams()}`
  }

  otherParams() {
    return `&limit=10&v=20161001&m=foursquare&section=drinks&openNow=1`
  }

  coords(c) {
    return `?ll=${c.lat},${c.lng}`
  }

  foursquareParams() {
    return `&client_id=${process.env.foursquare_id}&client_secret=${process.env.foursquare_secret}`
  }
}
module.exports = new FoursquareHelper()
