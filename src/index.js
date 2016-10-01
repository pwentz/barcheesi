import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.js.jsx';
import MapContainer from './components/MapContainer.js.jsx'
import HomeContainer from './components/HomeContainer.js.jsx'
import './index.css';
import reducer from './reducer'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/venues" component={MapContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
