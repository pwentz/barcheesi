import axios from 'axios'

class FoursquareHelper {
  getVenues(coordinates) {
    return axios.get(`https://api.foursquare.com/v2/venues/explore?ll=${coordinates.lat},${coordinates.lng}&client_id=${process.env.foursquare_id}&client_secret=${process.env.foursquare_secret}&limit=10&v=20161001&m=foursquare&section=drinks`)
  }
}
module.exports = new FoursquareHelper()
