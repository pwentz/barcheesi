import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import App from './App.js.jsx';
import MapContainer from './components/MapContainer.js.jsx'
import HomeContainer from './components/HomeContainer.js.jsx'
import VenueDataContainer from './components/VenueDataContainer.js.jsx'
import './index.css';
import reducer from './reducer'

const middleware = routerMiddleware(browserHistory)
const reducers = combineReducers({reducer, routing: routerReducer})
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>

      <Route path="/" component={App}>

        <IndexRoute component={HomeContainer}/>

        <Route path="/venues" component={MapContainer}>
          <Route path="/venues/:venueId" component={VenueDataContainer} />
        </Route>

      </Route>

    </Router>
  </Provider>,
  document.getElementById('root')
);
