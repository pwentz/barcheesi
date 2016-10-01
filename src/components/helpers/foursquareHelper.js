import axios from 'axios'

class FoursquareHelper {
  getVenues(coordinates) {
    axios.get(`https://api.foursquare.com/v2/venues/explore?ll=${coordinates.lat},${coordinates.lng}&client_id=${process.env.foursquare_id}&client_secret=${process.env.foursquare_secret}&limit=10&v=20161001&m=foursquare&section=drinks`)
      .then(response => {
        console.log(response.data.response.groups[0].items.map(v => v.venue.name))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
module.exports = new FoursquareHelper()
