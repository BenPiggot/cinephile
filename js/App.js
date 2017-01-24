import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import Landing from './Landing';
import About from './About';
import Search from './Search';
import MovieDetails from './MovieDetails';
import { Provider } from 'react-redux';

render(( 
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/search/:id' component={MovieDetails} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>
), document.getElementById('app'));