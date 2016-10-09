const FoursquareHelper = require('./helpers/foursquareHelper')

worker.onmessage = function(e) {
  debugger;
  console.log('message received')
  postMessage(e.data)
}
