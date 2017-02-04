import { Router, Route, browserHistory } from 'react-router';
import App from '../containers/App';
import React from 'react';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
)
