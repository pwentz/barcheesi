class UserLocator {
  constructor() {
    this.latitude = null
    this.longitude = null
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showError);
    }
    else {
      console.log("Geolocation is not supported by this browser.")
    }
  }

  showPosition(position) {
    this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude
    console.log(this.latitude)
    console.log(this.longitude)
  }

  showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
      break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
      break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.")
      break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.")
      break;
    }
  }
}
module.exports = UserLocator
