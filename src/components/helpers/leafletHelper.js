import L from 'leaflet'

class LeafletHelper {
  constructor(venues) {
    this.venues = venues
  }

  instantiateMap(map) {
    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=${process.env.mapbox_access_token}`, {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    }).addTo(map);
  }

  addMarkers(map) {
    this.venues.forEach( v => {
      const marker = L.marker([v.location.lat, v.location.lng]).addTo(map)
      marker.bindPopup(v.name)
    })
  }
}

module.exports = LeafletHelper
