import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import Landing from './Landing';
import About from './About';
import { Provider } from 'react-redux';

render(( 
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Landing} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>
), document.getElementById('app'));